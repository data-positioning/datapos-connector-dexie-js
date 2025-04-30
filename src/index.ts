// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// Dependencies - Vendor
import Dexie from 'dexie';

// Dependencies - Framework
import { AbortError } from '@datapos/datapos-share-core';
import type { DropSettings } from '@datapos/datapos-share-core';
import type { PutSettings } from '@datapos/datapos-share-core';
import type { RemoveSettings } from '@datapos/datapos-share-core';
import type { ConnectionConfig, ConnectionItemConfig, Connector } from '@datapos/datapos-share-core';
import type { ConnectorConfig, CreateSettings } from '@datapos/datapos-share-core';
import type { FindResult, FindSettings } from '@datapos/datapos-share-core';
import type { ListResult, ListSettings } from '@datapos/datapos-share-core';
import type { PreviewData, PreviewSettings } from '@datapos/datapos-share-core';
import type { RetrieveSettings, RetrieveSummary } from '@datapos/datapos-share-core';

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
const CALLBACK_RETRIEVE_ABORTED = 'Connector failed to abort retrieve all records operation.';

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

    // Operations - Abort
    abort(connector: DexieJSConnector): void {
        if (!connector.abortController) return;
        connector.abortController.abort();
        connector.abortController = null;
        return;
    }

    // Operations - Create
    async create(connector: DexieJSConnector, settings: CreateSettings): Promise<void> {
        const pathSegments = settings.path?.split('/');
        if (pathSegments.length !== 3) throw new Error(`Encountered invalid create object path '${settings.path}'.`);
        const container = await establishContainer(connector, pathSegments[1]);

        container.close();
        const newContainer = new Dexie(container.name);
        newContainer.on('blocked', () => false); // Silence console warning of blocked event.

        if (container.tables.length === 0) {
            await container.delete();
            newContainer.version(1).stores({ [pathSegments[2]]: settings.structure || '' });
            connector.containers[pathSegments[1]] = await newContainer.open();
            return;
        }

        const currentSchema = container.tables.reduce(
            (result, { name, schema }) => {
                result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
                return result;
            },
            {} as Record<string, string>
        );
        newContainer.version(container.verno).stores(currentSchema);
        newContainer.version(container.verno + 1).stores({ [pathSegments[2]]: settings.structure || '' });
        connector.containers[pathSegments[1]] = await newContainer.open();
        return;
    }

    // Operations - Drop
    async drop(connector: DexieJSConnector, settings: DropSettings): Promise<void> {
        const pathSegments = settings.path?.split('/');
        if (pathSegments.length !== 3) throw new Error(`Encountered invalid drop object path '${settings.path}'.`);
        const container = await establishContainer(connector, pathSegments[1]);

        container.close();
        const newContainer = new Dexie(container.name);
        newContainer.on('blocked', () => false); // Silence console warning of blocked event.

        if (container.tables.length === 0) {
            await container.delete();
            newContainer.version(1).stores({});
            connector.containers[pathSegments[1]] = await newContainer.open();
            return;
        }

        const currentSchema = container.tables.reduce(
            (result, { name, schema }) => {
                result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
                return result;
            },
            {} as Record<string, string>
        );
        newContainer.version(container.verno).stores(currentSchema);
        newContainer.version(container.verno + 1).stores({ [pathSegments[2]]: null });
        connector.containers[pathSegments[1]] = await newContainer.open();
        return;
    }

    // Operations - Find
    async find(connector: DexieJSConnector, settings: FindSettings): Promise<FindResult> {
        const container = await establishContainer(connector, settings.containerName);
        return container.tables.find((table) => table.name === settings.objectName) ? { folderPath: '/' } : {};
    }

    // Operations - List
    async list(connector: DexieJSConnector, settings: ListSettings): Promise<ListResult> {
        const folderPathSegments = settings.folderPath.split('/');
        switch (folderPathSegments.length) {
            case 3: {
                if (folderPathSegments[0]) throw new Error(`Encountered invalid list items folder path '${settings.folderPath}'.`); // Invalid folder path if characters ahead of first separator.
                const containerName = folderPathSegments[1];
                if (containerName) {
                    // Return list of table items in Dexie database.
                    const container = await establishContainer(connector, containerName);
                    const connectionItemConfigs = container.tables.map(
                        (table) => ({ folderPath: settings.folderPath, id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionItemConfig
                    );
                    return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
                } else {
                    // Return list of database items for Dexie instance.
                    const databaseNames = await Dexie.getDatabaseNames();
                    const connectionItemConfigs = databaseNames.map(
                        (name) => ({ folderPath: settings.folderPath, id: name, label: name, name: name, typeId: 'object' }) as ConnectionItemConfig
                    );
                    return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
                }
            }
            default:
                throw new Error(`Encountered invalid list items folder path '${settings.folderPath}'.`);
        }
    }

    // Operations - Preview
    async preview(connector: DexieJSConnector, settings: PreviewSettings): Promise<PreviewData> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`Encountered invalid preview object path '${settings.path}'.`);
        const container = await establishContainer(connector, pathSegments[1]);
        const data = await container.table<Record<string, unknown>>(pathSegments[2]).limit(50).toArray(); // Fetch the first 50 rows.
        return { data, typeId: 'jsonArray' };
    }

    // Operations - Put
    async put(connector: DexieJSConnector, settings: PutSettings): Promise<void> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`Encountered invalid put record(s) path '${settings.path}'.`);
        const container = await establishContainer(connector, pathSegments[1]);
        const records = settings.records;
        if (records.length === 1) {
            await container.table(pathSegments[2]).put(records[0]);
        } else if (records.length > 1) {
            await container.table(pathSegments[2]).bulkPut(records);
        }
        return;
    }

    // Operations - Remove
    async remove(connector: DexieJSConnector, settings: RemoveSettings): Promise<void> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`Encountered invalid remove record(s) path '${settings.path}'.`);
        const container = await establishContainer(connector, pathSegments[1]);
        const keys = settings.keys;
        if (keys.length === 0) {
            await container.table(pathSegments[2]).clear(); // Remove all records.
        } else if (keys.length === 1) {
            await container.table(pathSegments[2]).delete(keys[0]); // Remove single record.
        } else {
            await container.table(pathSegments[2]).bulkDelete(keys); // Remove multiple records.
        }
        return;
    }

    // Operations - Retrieve
    async retrieve(
        connector: DexieJSConnector,
        settings: RetrieveSettings,
        chunk: (records: Record<string, unknown>[]) => void,
        complete: (result: RetrieveSummary) => void
    ): Promise<void> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`Encountered invalid retrieve record(s) path '${settings.path}'.`);
        const container = await establishContainer(connector, pathSegments[1]);
        const records = await container.table<Record<string, unknown>>(pathSegments[2]).toArray();
        chunk(records);
        return;
    }
}

// Utilities - Establish Container
async function establishContainer(connector: DexieJSConnector, name: string) {
    if (!connector.containers[name]) {
        const db = new Dexie(name);
        if (!(await Dexie.exists(db.name))) db.version(1).stores({});
        connector.containers[name] = await db.open();
    }
    return connector.containers[name];
}
