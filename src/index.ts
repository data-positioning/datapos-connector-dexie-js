// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// Dependencies - Vendor
import Dexie from 'dexie';

// Dependencies - Framework
import { ConnectorError } from '@datapos/datapos-share-core';
import type {
    ConnectionConfig,
    ConnectionItemConfig,
    Connector,
    ConnectorCallbackData,
    ConnectorConfig,
    EstablishContainerResult,
    FindSettings
} from '@datapos/datapos-share-core';
import type { EstablishContainerSettings } from '@datapos/datapos-share-core';
import type { FindResult } from '@datapos/datapos-share-core';
import type { ListResult, ListSettings } from '@datapos/datapos-share-core';

// Dependencies - Data
import config from './config.json';
import { version } from '../package.json';

// Constants
const ERROR_LIST_ITEMS_FAILED = 'Connector list items failed.';

// Classes - File Store Emulator Connector
export default class DexieJSConnector implements Connector {
    abortController: AbortController | undefined;
    readonly config: ConnectorConfig;
    readonly connectionConfig: ConnectionConfig;

    constructor(connectionConfig: ConnectionConfig) {
        this.abortController = null;
        this.config = config as ConnectorConfig;
        this.config.version = version;
        this.connectionConfig = connectionConfig;
    }

    abort(): void {
        if (!this.abortController) return;
        this.abortController.abort();
        this.abortController = null;
    }

    async establishContainer(settings: EstablishContainerSettings): Promise<EstablishContainerResult> {
        console.log('aaaa', settings);
        return { container: await new Dexie(settings.id).open() };
    }

    async find(settings: FindSettings & { container: Dexie }): Promise<FindResult | undefined> {
        try {
            return settings.container.tables.find((table) => table.name === settings.objectId) ? { folderPath: '/' } : undefined;
        } catch (error) {
            throw constructErrorAndTidyUp(this, ERROR_LIST_ITEMS_FAILED, 'find', error);
        }
    }

    async list(callback: (data: ConnectorCallbackData) => void, settings: ListSettings & { container: Dexie }): Promise<ListResult> {
        try {
            const connectionItemConfigs = settings.container.tables.map(
                (table) => ({ folderPath: '/', id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionItemConfig
            );
            return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
        } catch (error) {
            throw constructErrorAndTidyUp(this, ERROR_LIST_ITEMS_FAILED, 'listItems', error);
        }
    }
}

// Utilities - Construct Error and Tidy Up
function constructErrorAndTidyUp(connector: Connector, message: string, context: string, error: unknown): ConnectorError {
    connector.abortController = null;
    return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
}

// onMounted(async () => {
//     const db = await new Dexie('myDatabase').open();
//     // let db = await new Dexie("FriendDatabase").open();
//     // db.version(1).stores({ friends: 'id,name,age' });
//     const tableName = 'friends';
//     await db.table(tableName).bulkPut([
//         { id: 1, name: 'Josephine', age: 21 },
//         { id: 2, name: 'Per', age: 75 },
//         { id: 3, name: 'Simon', age: 5 },
//         { id: 4, name: 'Sara', age: 50, notIndexedProperty: 'foo' }
//     ]);
//     const friends = await db.table(tableName).toArray();
//     console.log('friends', friends);
//     const db2 = await changeSchema(db, { friends2: 'id,name,age' });
//     const friends2 = await db2.table('friends2').toArray();
//     console.log('friends2', friends2);
// });

// // Utilities - Change Schema
// async function changeSchema(db: Dexie, schemaChanges: Record<string, string>) {
//     db.close();
//     const newDb = new Dexie(db.name);
//     newDb.on('blocked', () => false); // Silence console warning of blocked event.
//     console.log('aaaa', db.tables.length);
//     if (db.tables.length === 0) {
//         await db.delete();
//         newDb.version(1).stores(schemaChanges);
//         return await newDb.open();
//     }
//     const currentSchema = db.tables.reduce(
//         (result, { name, schema }) => {
//             result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
//             return result;
//         },
//         {} as Record<string, string>
//     );
//     console.log('Version: ' + db.verno);
//     console.log('Current Schema: ', currentSchema);
//     newDb.version(db.verno).stores(currentSchema);
//     newDb.version(db.verno + 1).stores(schemaChanges);
//     return await newDb.open();
// }
