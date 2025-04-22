// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// Dependencies - Vendor
import Dexie from 'dexie';

// Dependencies - Framework
import { AbortError, ConnectorError } from '@datapos/datapos-share-core';
import type { ConnectionConfig, ConnectionItemConfig, Connector, ConnectorCallbackData } from '@datapos/datapos-share-core';
import type { ConnectorConfig, CreateInterface, CreateResult, CreateSettings } from '@datapos/datapos-share-core';
import type { DropInterface, DropResult } from '@datapos/datapos-share-core';
import type { FindResult, FindSettings } from '@datapos/datapos-share-core';
import type { ListResult, ListSettings } from '@datapos/datapos-share-core';
import type { DataViewPreviewConfig, PreviewInterface, PreviewResult, PreviewSettings } from '@datapos/datapos-share-core';
import type { PutInterface } from '@datapos/datapos-share-core';
import type { RetrieveInterface, RetrieveSettings } from '@datapos/datapos-share-core';
import type { RemoveInterface } from '@datapos/datapos-share-core';

// Dependencies - Data
import config from './config.json';
import { version } from '../package.json';

// Interfaces/Types - Connector (Dexie)
declare module '@datapos/datapos-share-core' {
    interface Connector {
        containers: Record<string, Dexie>;
    }
}

// Constants
const CALLBACK_PREVIEW_ABORTED = 'Connector preview aborted.';
const CALLBACK_READ_ABORTED = 'Connector read aborted.';
const ERROR_LIST_ITEMS_FAILED = 'Connector list items failed.';
const ERROR_PREVIEW_FAILED = 'Connector preview failed.';

// Classes - Dexie.js Connector
export default class DexieJSConnector implements Connector {
    abortController: AbortController | undefined;
    readonly config: ConnectorConfig;
    readonly connectionConfig: ConnectionConfig;
    containers: Record<string, Dexie>;

    constructor(connectionConfig: ConnectionConfig) {
        this.abortController = null;
        this.config = config as ConnectorConfig;
        this.config.version = version;
        this.connectionConfig = connectionConfig;
        this.containers = {};
    }

    abort(): void {
        if (!this.abortController) return;
        this.abortController.abort();
        this.abortController = null;
    }

    async find(settings: FindSettings): Promise<FindResult> {
        try {
            const container = await this.establishContainer(settings.containerName);
            return container.tables.find((table) => table.name === settings.objectName) ? { folderPath: '/' } : undefined;
        } catch (error) {
            throw this.constructErrorAndTidyUp(ERROR_LIST_ITEMS_FAILED, 'find', error);
        }
    }

    getCreateInterface(): CreateInterface {
        return { create: this.create };
    }

    getDropInterface(): DropInterface {
        return { drop: this.drop };
    }

    getPreviewInterface(): PreviewInterface {
        return { preview: this.preview };
    }

    getPutInterface(): PutInterface {
        return { put: this.put };
    }

    getRetrieveInterface(): RetrieveInterface {
        return { retrieve: this.retrieve };
    }

    getRemoveInterface(): RemoveInterface {
        return { remove: this.remove };
    }

    async list(settings: ListSettings): Promise<ListResult> {
        try {
            const container = await this.establishContainer(settings.containerName);
            const connectionItemConfigs = container.tables.map(
                (table) => ({ folderPath: '/', id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionItemConfig
            );
            return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
        } catch (error) {
            throw this.constructErrorAndTidyUp(ERROR_LIST_ITEMS_FAILED, 'listItems', error);
        }
    }

    // Operations - Create
    private async create(containerName: string, objectName: string, structure: Record<string, string>): Promise<{ error?: unknown; result?: CreateResult }> {
        const container = await this.establishContainer(containerName);

        container.close();

        const newContainer = new Dexie(container.name);
        newContainer.on('blocked', () => false); // Silence console warning of blocked event.

        if (container.tables.length === 0) {
            await container.delete();
            newContainer.version(1).stores(structure);
            this.containers[containerName] = await newContainer.open();
            return {};
        }

        const currentSchema = container.tables.reduce(
            (result, { name, schema }) => {
                result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
                return result;
            },
            {} as Record<string, string>
        );
        newContainer.version(container.verno).stores(currentSchema);
        newContainer.version(container.verno + 1).stores(structure);
        this.containers[containerName] = await newContainer.open();

        return {};
    }

    // Operations - Drop
    private async drop(containerName: string, objectName: string): Promise<{ error?: unknown; result?: DropResult }> {
        const container = await this.establishContainer(containerName);

        container.close();

        const newContainer = new Dexie(container.name);
        newContainer.on('blocked', () => false); // Silence console warning of blocked event.

        if (container.tables.length === 0) {
            await container.delete();
            newContainer.version(1).stores({});
            this.containers[containerName] = await newContainer.open();
            return {};
        }

        const currentSchema = container.tables.reduce(
            (result, { name, schema }) => {
                result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
                return result;
            },
            {} as Record<string, string>
        );
        newContainer.version(container.verno).stores(currentSchema);
        newContainer.version(container.verno + 1).stores({ [objectName]: null });
        this.containers[containerName] = await newContainer.open();

        return {};
    }

    // Operations - Preview
    private async preview(itemConfig: ConnectionItemConfig, settings: PreviewSettings): Promise<{ error?: unknown; result?: PreviewResult }> {
        try {
            // Create an abort controller. Get the signal for the abort controller and add an abort listener.
            this.abortController = new AbortController();
            const signal = this.abortController.signal;
            signal.addEventListener('abort', () => {
                throw this.constructErrorAndTidyUp(ERROR_PREVIEW_FAILED, 'preview.2', new AbortError(CALLBACK_PREVIEW_ABORTED));
            });

            // Fetch the first 50 rows.
            const container = await this.establishContainer(settings.containerName);
            const data = await container.table(itemConfig.name).limit(50).toArray();
            return { result: { data, typeId: 'jsonArray' } };
        } catch (error) {
            throw this.constructErrorAndTidyUp(ERROR_PREVIEW_FAILED, 'preview.1', error);
        }
    }

    // Operations - Put
    private async put(
        containerName: string,
        objectName: string,
        data: Record<string, unknown> | Record<string, unknown>[],
        callback: (data: ConnectorCallbackData) => void
    ): Promise<{ error?: unknown }> {
        try {
            const container = await this.establishContainer(containerName);
            if (Array.isArray(data)) {
                const x1 = await container.table(objectName).bulkPut(data);
                console.log(1111, x1);
            } else {
                const x2 = await container.table(objectName).put(data);
                console.log(2222, x2);
            }
            return {};
        } catch (error) {
            console.log(3333, error);
            return error;
        }
    }

    // Operations - Remove
    private async remove(containerName: string, objectName: string, keys: Record<string, unknown>[]): Promise<{ error?: unknown }> {
        return {};
    }

    // Operations - Retrieve
    private async retrieve(
        itemConfig: ConnectionItemConfig,
        previewConfig: DataViewPreviewConfig,
        settings: RetrieveSettings,
        callback: (data: ConnectorCallbackData) => void
    ): Promise<void> {
        try {
            return;
        } catch (error) {
            throw this.constructErrorAndTidyUp(ERROR_PREVIEW_FAILED, 'read.1', error);
        }
    }

    // Utilities - Construct Error and Tidy Up
    private constructErrorAndTidyUp(message: string, context: string, error: unknown): ConnectorError {
        this.abortController = null;
        return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
    }

    // Utilities - Establish Container
    private async establishContainer(name: string) {
        if (!this.containers[name]) {
            const db = new Dexie(name);
            if (!(await Dexie.exists(db.name))) db.version(1).stores({});
            this.containers[name] = await db.open();
        }
        return this.containers[name];
    }
}
