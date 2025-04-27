// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// Dependencies - Vendor
import Dexie from 'dexie';

// Dependencies - Framework
import { ConnectorError } from '@datapos/datapos-share-core';
import type { ConnectionConfig, ConnectionItemConfig, Connector } from '@datapos/datapos-share-core';
import type { ConnectorConfig, CreateResult, CreateSettings } from '@datapos/datapos-share-core';
import type { DropResult, DropSettings } from '@datapos/datapos-share-core';
import type { FindResult, FindSettings } from '@datapos/datapos-share-core';
import type { ListResult, ListSettings } from '@datapos/datapos-share-core';
import type { PreviewData, PreviewSettings } from '@datapos/datapos-share-core';
import type { PutResult, PutSettings } from '@datapos/datapos-share-core';
import type { RemoveResult, RemoveSettings } from '@datapos/datapos-share-core';
import type { RetrieveRecord, RetrieveSettings, RetrieveSummary } from '@datapos/datapos-share-core';

// Dependencies - Data
import config from './config.json';
import { version } from '../package.json';
import type { Callback, Options, Parser } from 'csv-parse/.';

// Interfaces/Types - Connector (Dexie)
declare module '@datapos/datapos-share-core' {
    interface Connector {
        containers: Record<string, Dexie>;
    }
}

// Constants
const CALLBACK_PREVIEW_ABORTED = 'Connector preview aborted.';
const CALLBACK_READ_ABORTED = 'Connector read aborted.';
const ERROR_FIND_ITEM_FAILED = 'Connector find item failed.';
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

    // Operations - Abort
    abort(connector: DexieJSConnector): void {
        if (!connector.abortController) return;
        connector.abortController.abort();
        connector.abortController = null;
        return;
    }

    // Operations - Create
    async create(connector: DexieJSConnector, settings: CreateSettings): Promise<CreateResult> {
        console.log(1111, settings);
        // const container = await establishContainer(connector,containerName);

        // container.close();

        // const newContainer = new Dexie(container.name);
        // newContainer.on('blocked', () => false); // Silence console warning of blocked event.

        // if (container.tables.length === 0) {
        //     await container.delete();
        //     newContainer.version(1).stores(structure);
        //     connector.containers[containerName] = await newContainer.open();
        //     return {};
        // }

        // const currentSchema = container.tables.reduce(
        //     (result, { name, schema }) => {
        //         result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
        //         return result;
        //     },
        //     {} as Record<string, string>
        // );
        // newContainer.version(container.verno).stores(currentSchema);
        // newContainer.version(container.verno + 1).stores(structure);
        // connector.containers[containerName] = await newContainer.open();

        return {};
    }

    // Operations - Drop
    async drop(connector: DexieJSConnector, settings: DropSettings): Promise<DropResult> {
        console.log(2222, settings);
        // const container = await establishContainer(connector,containerName);

        // container.close();

        // const newContainer = new Dexie(container.name);
        // newContainer.on('blocked', () => false); // Silence console warning of blocked event.

        // if (container.tables.length === 0) {
        //     await container.delete();
        //     newContainer.version(1).stores({});
        //     connector.containers[containerName] = await newContainer.open();
        //     return {};
        // }

        // const currentSchema = container.tables.reduce(
        //     (result, { name, schema }) => {
        //         result[name] = [schema.primKey.src, ...schema.indexes.map((idx) => idx.src)].join(',');
        //         return result;
        //     },
        //     {} as Record<string, string>
        // );
        // newContainer.version(container.verno).stores(currentSchema);
        // newContainer.version(container.verno + 1).stores({ [objectName]: null });
        // connector.containers[containerName] = await newContainer.open();

        return {};
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
        try {
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
                // case 3: {
                //     if (folderPathSegments[0]) throw new Error(`Invalid folder path '${settings.folderPath}'.`); // Invalid folder path if characters ahead of first separator.
                //     const containerName = folderPathSegments[1];
                //     const objectName = folderPathSegments[2];
                //     if (containerName && objectName) {
                //         // Return list of records in table in Dexie database.
                //         const container = await establishContainer(connector,containerName);
                //         const records = await container.table(objectName).toArray();
                //         const connectionItemConfigs = records.map(
                //             (record) => ({ folderPath: settings.folderPath, id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionItemConfig
                //         );
                //         return { cursor: undefined, isMore: false, connectionItemConfigs, totalCount: connectionItemConfigs.length };
                //     } else {
                //         throw new Error(`Invalid folder path '${settings.folderPath}'.`);
                //     }
                // }
                default:
                    throw new Error(`Invalid folder path '${settings.folderPath}'.`);
            }
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_LIST_ITEMS_FAILED, 'list.1', error);
        }
    }

    // Operations - Preview
    async preview(connector: DexieJSConnector, settings: PreviewSettings): Promise<PreviewData> {
        try {
            // // Create an abort controller. Get the signal for the abort controller and add an abort listener.
            // connector.abortController = new AbortController();
            // const signal = connector.abortController.signal;
            // signal.addEventListener('abort', () => {
            //     throw constructErrorAndTidyUp(connector,ERROR_PREVIEW_FAILED, 'preview.2', new AbortError(CALLBACK_PREVIEW_ABORTED));
            // });

            // // Fetch the first 50 rows.
            // const container = await establishContainer(connector,settings.containerName);
            // const data = await container.table(itemConfig.name).limit(50).toArray();
            return { data: [], typeId: 'jsonArray' };
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'preview.1', error);
        }
    }

    // Utilities - Put
    async put(
        connector: DexieJSConnector,
        data: Record<string, unknown> | Record<string, unknown>[],
        settings: PutSettings,
        chunk: (count: number) => void,
        complete: (result: PutResult) => void
    ): Promise<void> {
        try {
            // const container = await establishContainer(connector,containerName);
            // if (Array.isArray(data)) {
            //     const x1 = await container.table(objectName).bulkPut(data);
            //     console.log(1111, x1);
            // } else {
            //     const x2 = await container.table(objectName).put(data);
            //     console.log(2222, x2);
            // }
            return;
        } catch (error) {
            console.log(3333, error);
            return;
        }
    }

    // Utilities - Remove
    async remove(connector: DexieJSConnector, settings: RemoveSettings, chunk: (count: number) => void, complete: (result: RemoveResult) => void): Promise<void> {
        return;
    }

    // Utilities - Retrieve
    async retrieve(
        connector: DexieJSConnector,
        settings: RetrieveSettings,
        chunk: (records: RetrieveRecord[]) => void,
        complete: (result: RetrieveSummary) => void,
        tools: { csvParse: (options?: Options, callback?: Callback) => Parser | undefined }
    ): Promise<void> {
        try {
            return;
        } catch (error) {
            throw constructErrorAndTidyUp(connector, ERROR_PREVIEW_FAILED, 'read.1', error);
        }
    }
}

// Utilities - Construct Error and Tidy Up
function constructErrorAndTidyUp(connector: DexieJSConnector, message: string, context: string, error: unknown): ConnectorError {
    connector.abortController = null;
    return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
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
