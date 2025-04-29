// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// Dependencies - Vendor
import Dexie from 'dexie';

// Dependencies - Framework
import type { DropSettings } from '@datapos/datapos-share-core';
import type { PutSettings } from '@datapos/datapos-share-core';
import type { RemoveSettings } from '@datapos/datapos-share-core';
import { AbortError, ConnectorError } from '@datapos/datapos-share-core';
import type { ConnectionConfig, ConnectionItemConfig, Connector, TableRecord } from '@datapos/datapos-share-core';
import type { ConnectorConfig, CreateSettings } from '@datapos/datapos-share-core';
import type { FindResult, FindSettings } from '@datapos/datapos-share-core';
import type { ListResult, ListSettings } from '@datapos/datapos-share-core';
import type { PreviewData, PreviewSettings } from '@datapos/datapos-share-core';
import type { RetrieveSettings, RetrieveSummary, RetrieveTools } from '@datapos/datapos-share-core';

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
const CALLBACK_RETRIEVE_ABORTED = 'Connector failed to abort retrieve items operation.';
const ERROR_CREATE_FAILED = 'Connector failed to execute create object operation.';
const ERROR_DROP_FAILED = 'Connector failed to execute drop object operation.';
const ERROR_FIND_ITEM_FAILED = 'Connector failed to execute find item operation.';
const ERROR_LIST_ITEMS_FAILED = 'Connector failed to execute list items operation.';
const ERROR_PREVIEW_FAILED = 'Connector failed to execute preview item operation.';
const ERROR_PUT_FAILED = 'Connector failed to execute put item(s) operation.';
const ERROR_REMOVE_FAILED = 'Connector failed to execute remove item(s) operation.';
const ERROR_RETRIEVE_FAILED = 'Connector failed to execute retrieve records operation.';

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
        try {
            const pathSegments = settings.path?.split('/');
            if (pathSegments.length !== 3) throw new Error(`Invalid create path '${settings.path}'.`);
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
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_CREATE_FAILED, 'create.1', error);
        }
    }

    // Operations - Drop
    async drop(connector: DexieJSConnector, settings: DropSettings): Promise<void> {
        try {
            const pathSegments = settings.path?.split('/');
            if (pathSegments.length !== 3) throw new Error(`Invalid drop path '${settings.path}'.`);
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
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_DROP_FAILED, 'drop.1', error);
        }
    }

    // Operations - Find
    async find(connector: DexieJSConnector, settings: FindSettings): Promise<FindResult> {
        try {
            const container = await establishContainer(connector, settings.containerName);
            return container.tables.find((table) => table.name === settings.objectName) ? { folderPath: '/' } : undefined;
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_FIND_ITEM_FAILED, 'find.1', error);
        }
    }

    // Operations - List
    async list(connector: DexieJSConnector, settings: ListSettings): Promise<ListResult> {
        const folderPathSegments = settings.folderPath.split('/');
        switch (folderPathSegments.length) {
            case 2: {
                if (folderPathSegments[0]) throw new Error(`Invalid folder path '${settings.folderPath}'.`); // Invalid folder path if characters ahead of first separator.
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
                throw new Error(`Invalid folder path '${settings.folderPath}'.`);
        }
    }

    // Operations - Preview
    async preview(connector: DexieJSConnector, settings: PreviewSettings): Promise<PreviewData> {
        try {
            const pathSegments = settings.path.split('/');
            if (pathSegments.length !== 3) throw new Error(`Invalid preview path '${settings.path}'.`);
            const container = await establishContainer(connector, pathSegments[1]);
            const data = await container.table<TableRecord>(pathSegments[2]).limit(50).toArray(); // Fetch the first 50 rows.
            return { data, typeId: 'jsonArray' };
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'preview.1', error);
        }
    }

    // Operations - Put
    async put(connector: DexieJSConnector, settings: PutSettings): Promise<void> {
        try {
            const pathSegments = settings.path.split('/');
            if (pathSegments.length !== 3) throw new Error(`Invalid preview path '${settings.path}'.`);
            const container = await establishContainer(connector, pathSegments[1]);
            const data = settings.data;
            if (data.length === 1) {
                await container.table(pathSegments[2]).put(data[0]);
            } else if (data.length > 1) {
                await container.table(pathSegments[2]).bulkPut(data);
            }
            return;
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_PUT_FAILED, 'put.1', error);
        }
    }

    // Operations - Remove
    async remove(connector: DexieJSConnector, settings: RemoveSettings): Promise<void> {
        try {
            const pathSegments = settings.path.split('/');
            if (pathSegments.length !== 3) throw new Error(`Invalid preview path '${settings.path}'.`);
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
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_REMOVE_FAILED, 'remove.1', error);
        }
    }

    // Operations - Retrieve
    async retrieve(
        connector: DexieJSConnector,
        settings: RetrieveSettings,
        chunk: (records: TableRecord[]) => void,
        complete: (result: RetrieveSummary) => void,
        tools: RetrieveTools
    ): Promise<void> {
        try {
            const pathSegments = settings.path.split('/');
            if (pathSegments.length !== 3) throw new Error(`Invalid retrieve path '${settings.path}'.`);
            const container = await establishContainer(connector, pathSegments[1]);
            const records = await container.table<TableRecord>(pathSegments[2]).toArray();
            chunk(records);
            return;
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_RETRIEVE_FAILED, 'retrieve.1', error);
        }
    }
}

// Utilities - Construct Error and Tidy Up
function constructErrorAndTidyUp(connector: DexieJSConnector, message: string, context: string, error: unknown) {
    connector.abortController = null;
    return error;
    // return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
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
