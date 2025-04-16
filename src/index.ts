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
import type { EstablishContainerResult, EstablishContainerSettings } from '@datapos/datapos-share-core';
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

    async establishContainer(settings: EstablishContainerSettings): Promise<EstablishContainerResult> {
        let container = this.containers[settings.name];
        if (!container) this.containers[settings.name] = container = await new Dexie(settings.name).open();
        return { id: settings.name };
    }

    async find(settings: FindSettings & { container: Dexie }): Promise<FindResult> {
        try {
            let container = this.containers[settings.containerName];
            if (!container) this.containers[settings.containerName] = container = await new Dexie(settings.containerName).open();
            return container.tables.find((table) => table.name === settings.objectName) ? { folderPath: '/' } : undefined;
        } catch (error) {
            throw constructErrorAndTidyUp(this, ERROR_LIST_ITEMS_FAILED, 'find', error);
        }
    }

    getCreateInterface(): CreateInterface {
        return { connector: this, create };
    }

    getDropInterface(): DropInterface {
        return { connector: this, drop };
    }

    getPreviewInterface(): PreviewInterface {
        return { connector: this, preview };
    }

    getPutInterface(): PutInterface {
        return { connector: this, put };
    }

    getRetrieveInterface(): RetrieveInterface {
        return { connector: this, retrieve };
    }

    getRemoveInterface(): RemoveInterface {
        return { connector: this, remove };
    }

    async list(settings: ListSettings & { container: Dexie }): Promise<ListResult> {
        try {
            let container = this.containers[settings.containerName];
            if (!container) this.containers[settings.containerName] = container = await new Dexie(settings.containerName).open();
            const connectionItemConfigs = container.tables.map(
                (table) => ({ folderPath: '/', id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionItemConfig
            );
            return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
        } catch (error) {
            throw constructErrorAndTidyUp(this, ERROR_LIST_ITEMS_FAILED, 'listItems', error);
        }
    }
}

// Operations - Create
async function create(connector: Connector, containerName: string, objectName: string, structure: Record<string, string>): Promise<{ error?: unknown; result?: CreateResult }> {
    let container = connector.containers[containerName];
    if (!container) this.containers[containerName] = container = await new Dexie(containerName).open();

    container.close();

    const newContainer = new Dexie(container.name);
    newContainer.on('blocked', () => false); // Silence console warning of blocked event.

    if (container.tables.length === 0) {
        await container.delete();
        newContainer.version(1).stores(structure);
        connector.containers[containerName] = await newContainer.open();
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
    connector.containers[containerName] = await newContainer.open();

    return {};
}

// Operations - Drop
async function drop(connector: Connector, containerName: string, objectName: string): Promise<{ error?: unknown; result?: DropResult }> {
    let container = connector.containers[containerName];
    if (!container) this.containers[containerName] = container = await new Dexie(containerName).open();

    container.close();

    const newContainer = new Dexie(container.name);
    newContainer.on('blocked', () => false); // Silence console warning of blocked event.

    if (container.tables.length === 0) {
        await container.delete();
        newContainer.version(1).stores({});
        connector.containers[containerName] = await newContainer.open();
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
    connector.containers[containerName] = await newContainer.open();

    return {};
}

// Operations - Preview
async function preview(connector: Connector, itemConfig: ConnectionItemConfig, settings: PreviewSettings): Promise<{ error?: unknown; result?: PreviewResult }> {
    try {
        // Create an abort controller. Get the signal for the abort controller and add an abort listener.
        connector.abortController = new AbortController();
        const signal = connector.abortController.signal;
        signal.addEventListener('abort', () => {
            throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'preview.2', new AbortError(CALLBACK_PREVIEW_ABORTED));
        });

        // Fetch the first 50 rows.
        let container = connector.containers[settings.containerName];
        if (!container) this.containers[settings.containerName] = container = await new Dexie(settings.containerName).open();
        const data = await container.table(itemConfig.name).limit(50).toArray();
        return { result: { data, typeId: 'jsonArray' } };
    } catch (error) {
        throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'preview.1', error);
    }
}

// Operations - Put
async function put(
    connector: Connector,
    containerName: string,
    objectName: string,
    data: Record<string, unknown> | Record<string, unknown>[],
    callback: (data: ConnectorCallbackData) => void
): Promise<{ error?: unknown }> {
    try {
        let container = connector.containers[containerName];
        if (!container) this.containers[containerName] = container = await new Dexie(containerName).open();
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
async function remove(connector: Connector, containerName: string, objectName: string, keys: Record<string, unknown>[]): Promise<{ error?: unknown }> {
    return {};
}

// Operations - Retrieve
async function retrieve(
    connector: Connector,
    itemConfig: ConnectionItemConfig,
    previewConfig: DataViewPreviewConfig,
    settings: RetrieveSettings,
    callback: (data: ConnectorCallbackData) => void
): Promise<void> {
    try {
        return;
    } catch (error) {
        throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'read.1', error);
    }
}

// Utilities - Construct Error and Tidy Up
function constructErrorAndTidyUp(connector: Connector, message: string, context: string, error: unknown): ConnectorError {
    connector.abortController = null;
    return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
}
