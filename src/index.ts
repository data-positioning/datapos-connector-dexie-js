// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// Dependencies - Vendor
import Dexie from 'dexie';
import { nanoid } from 'nanoid';

// Dependencies - Framework
import { AbortError, ConnectorError } from '@datapos/datapos-share-core';
import type { ConnectionConfig, ConnectionItemConfig, Connector, ConnectorCallbackData } from '@datapos/datapos-share-core';
import type { ConnectorConfig, CreateInterface, CreateResult, CreateSettings } from '@datapos/datapos-share-core';
import type { DropInterface, DropResult } from '@datapos/datapos-share-core';
import type { EstablishContainerResult, EstablishContainerSettings } from '@datapos/datapos-share-core';
import type { FindResult, FindSettings } from '@datapos/datapos-share-core';
import type { ListResult, ListSettings } from '@datapos/datapos-share-core';
import type { PreviewInterface, PreviewResult, PreviewSettings } from '@datapos/datapos-share-core';

// Dependencies - Data
import config from './config.json';
import { version } from '../package.json';

// Interfaces/Types - Connector
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

// Classes - File Store Emulator Connector
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
        const id = nanoid();
        this.containers[id] = await new Dexie(settings.name).open();
        return { id };
    }

    async find(settings: FindSettings & { container: Dexie }): Promise<FindResult> {
        try {
            const container = this.containers[settings.containerId];
            return container.tables.find((table) => table.name === settings.objectId) ? { folderPath: '/' } : undefined;
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

    async list(settings: ListSettings & { container: Dexie }): Promise<ListResult> {
        try {
            const container = this.containers[settings.containerId];
            const connectionItemConfigs = container.tables.map(
                (table) => ({ folderPath: '/', id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionItemConfig
            );
            return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
        } catch (error) {
            throw constructErrorAndTidyUp(this, ERROR_LIST_ITEMS_FAILED, 'listItems', error);
        }
    }
}

// Interfaces - Create
const create = async (
    connector: Connector,
    databaseName: string,
    tableName: string,
    typeId?: string,
    structure?: Record<string, unknown>
): Promise<{ error?: unknown; result?: CreateResult }> => {
    return {};
};

// Interfaces - Drop
const drop = async (connector: Connector, databaseName: string, tableName: string): Promise<{ error?: unknown; result?: DropResult }> => {
    return {};
};

// Interfaces - Preview
async function preview(
    connector: Connector,
    callback: (data: ConnectorCallbackData) => void,
    itemConfig: ConnectionItemConfig,
    settings: PreviewSettings
): Promise<{ error?: unknown; result?: PreviewResult }> {
    try {
        console.log(8888, connector, callback, itemConfig, settings);
        // Create an abort controller. Get the signal for the abort controller and add an abort listener.
        connector.abortController = new AbortController();
        const signal = connector.abortController.signal;
        signal.addEventListener('abort', () => {
            throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'preview.2', new AbortError(CALLBACK_PREVIEW_ABORTED));
        });

        // Fetch the first 50 rows.
        const container = connector.containers[settings.containerId];
        console.log(9999, connector.containers, container);
        const data = await container.table(itemConfig.name).limit(50).toArray();
        console.log(data);
        return { result: { data, typeId: 'table' } };
    } catch (error) {
        throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'preview.1', error);
    }
}

// Utilities - Construct Error and Tidy Up
function constructErrorAndTidyUp(connector: Connector, message: string, context: string, error: unknown): ConnectorError {
    connector.abortController = null;
    return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
}

// Utilities - Change Schema
async function changeSchema(db: Dexie, schemaChanges: Record<string, string>) {
    db.close();
    const newDb = new Dexie(db.name);
    newDb.on('blocked', () => false); // Silence console warning of blocked event.
    if (db.tables.length === 0) {
        await db.delete();
        newDb.version(1).stores(schemaChanges);
        return await newDb.open();
    }
    const currentSchema = db.tables.reduce(
        (result, { name, schema }) => {
            result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
            return result;
        },
        {} as Record<string, string>
    );
    newDb.version(db.verno).stores(currentSchema);
    newDb.version(db.verno + 1).stores(schemaChanges);
    return await newDb.open();
}

//     const db = await new Dexie('myDatabase').open();
//     await db.table('friends').bulkPut([
//         { id: 1, name: 'Josephine', age: 21 },
//         { id: 2, name: 'Per', age: 75 },
//         { id: 3, name: 'Simon', age: 5 },
//         { id: 4, name: 'Sara', age: 50, notIndexedProperty: 'foo' }
//     ]);
//     const friends = await db.table('friends').toArray();
//     const db2 = await changeSchema(db, { friends2: 'id,name,age' });
//     const friends2 = await db2.table('friends2').toArray();
