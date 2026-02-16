// https://dexie.org/docs/Tutorial/Hello-World
// https://dexie.org/docs/Tutorial/Understanding-the-basics
// https://dexie.org/docs/Dexie/Dexie.open()#dynamic-schema-manipulation

// External dependencies
import Dexie from 'dexie';

// DPU framework
import type { EngineUtilities } from '@datapos/datapos-shared/engine';
import type { ToolConfig } from '@datapos/datapos-shared/component/tool';
import type {
    ConnectionNodeConfig,
    ConnectorConfig,
    ConnectorInterface,
    CreateObjectOptions,
    DropObjectOptions,
    FindObjectFolderPathOptions,
    GetReadableStreamOptions,
    ListNodesOptions,
    PreviewObjectOptions,
    RemoveRecordsOptions,
    RetrieveRecordsOptions,
    RetrieveRecordsSummary,
    UpsertRecordsOptions
} from '@datapos/datapos-shared/component/connector';

// Data
import config from '~/config.json';
import { version } from '~/package.json';

// // Interfaces - Connector (Dexie).
// declare module '@datapos/datapos-shared' {
//     interface Connector {
//         containers: Record<string, Dexie>;
//     }
// }

// Constants
const CALLBACK_RETRIEVE_ABORTED = 'Connector failed to abort retrieve all records operation.';
const ERROR_INVALID_FOLDER_PATH = 'Encountered invalid folder path';
const ERROR_INVALID_OBJECT_PATH = 'Encountered invalid object path';

// Connectors
export default class DexieJSConnector implements ConnectorInterface {
    abortController: AbortController | undefined;
    readonly config: ConnectorConfig;
    engineUtilities: EngineUtilities;
    readonly toolConfigs;
    containers: Record<string, Dexie>;

    constructor(engineUtilities: EngineUtilities, toolConfigs: ToolConfig[]) {
        this.abortController = undefined;
        this.config = config as ConnectorConfig;
        this.config.version = version;
        this.engineUtilities = engineUtilities;
        this.toolConfigs = toolConfigs;
        this.containers = {};
    }

    // Abort operation
    abortOperation(): void {
        if (!this.abortController) return;
        this.abortController.abort();
        this.abortController = undefined;
    }

    // Create object
    async createObject(connector: DexieJSConnector, settings: CreateObjectOptions): Promise<void> {
        const pathSegments = settings.path?.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);

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

    // Operations - Drop object.
    async dropObject(connector: DexieJSConnector, settings: DropObjectOptions): Promise<void> {
        const pathSegments = settings.path?.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);

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

    // Operations - Find object.
    async findObject(connector: DexieJSConnector, settings: FindObjectFolderPathOptions): Promise<FindResult> {
        const container = await this.establishContainer(connector, settings.containerName);
        return container.tables.find((table) => table.name === settings.objectName) ? { folderPath: '/' } : {};
    }

    // Operations - Get record.
    async getRecord(connector: DexieJSConnector, settings: GetReadableStreamOptions): Promise<GetResult> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);
        const record = await container.table<Record<string, unknown>>(pathSegments[2]).get(settings.id);
        return { record };
    }

    // Operations - List nodes.
    async listNodes(connector: DexieJSConnector, settings: ListNodesOptions): Promise<ListResult> {
        const folderPathSegments = settings.folderPath.split('/');
        switch (folderPathSegments.length) {
            case 1: {
                if (folderPathSegments[0]) throw new Error(`${ERROR_INVALID_FOLDER_PATH} '${settings.folderPath}'.`); // Invalid folder path if characters ahead of first separator.
                // Return list of database nodes for Dexie instance.
                const databaseNames = await Dexie.getDatabaseNames();
                const connectionNodeConfigs = databaseNames.map(
                    (name) => ({ folderPath: settings.folderPath, id: name, label: name, name, typeId: 'folder' }) as ConnectionNodeConfig
                );
                return { cursor: undefined, isMore: false, connectionNodeConfigs, totalCount: connectionNodeConfigs.length };
            }
            case 2: {
                if (folderPathSegments[0]) throw new Error(`${ERROR_INVALID_FOLDER_PATH} '${settings.folderPath}'.`); // Invalid folder path if characters ahead of first separator.
                const containerName = folderPathSegments[1];
                if (!containerName) throw new Error(`${ERROR_INVALID_FOLDER_PATH} '${settings.folderPath}'.`); // Invalid folder path if no container name.
                // Return list of table nodes in Dexie database.
                const container = await this.establishContainer(connector, containerName);
                const connectionNodeConfigs = container.tables.map(
                    (table) => ({ folderPath: settings.folderPath, id: table.name, label: table.name, name: table.name, typeId: 'object' }) as ConnectionNodeConfig
                );
                return { cursor: undefined, isMore: false, connectionNodeConfigs, totalCount: connectionNodeConfigs.length };
            }
            default:
                throw new Error(`${ERROR_INVALID_FOLDER_PATH} '${settings.folderPath}'.`);
        }
    }

    // Operations - Preview object.
    async previewObject(connector: DexieJSConnector, settings: PreviewObjectOptions): Promise<PreviewResult> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);
        const data = await container.table<Record<string, unknown>>(pathSegments[2]).limit(50).toArray(); // Fetch the first 50 rows.
        return { data, typeId: 'jsonArray' };
    }

    // Operations - Upsert records.
    async upsertRecords(connector: DexieJSConnector, settings: UpsertRecordsOptions): Promise<void> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);
        const records = settings.records;
        if (records.length === 1) {
            await container.table(pathSegments[2]).put(records[0]);
        } else if (records.length > 1) {
            await container.table(pathSegments[2]).bulkPut(records);
        }
        return;
    }

    // Operations - Remove records.
    async removeRecords(connector: DexieJSConnector, settings: RemoveRecordsOptions): Promise<void> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);
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

    // Operations - Retrieve records.
    async retrieveRecords(
        connector: DexieJSConnector,
        settings: RetrieveRecordsOptions,
        chunk: (records: Record<string, unknown>[]) => void,
        complete: (result: RetrieveRecordsSummary) => void
    ): Promise<void> {
        const pathSegments = settings.path.split('/');
        if (pathSegments.length !== 3) throw new Error(`${ERROR_INVALID_OBJECT_PATH} '${settings.path}'.`);
        const container = await this.establishContainer(connector, pathSegments[1]);
        const records = await container.table<Record<string, unknown>>(pathSegments[2]).toArray();
        chunk(records);
        return;
    }

    // Utilities - Establish container.
    private async establishContainer(connector: DexieJSConnector, name: string) {
        if (!connector.containers[name]) {
            const db = new Dexie(name);
            if (!(await Dexie.exists(db.name))) db.version(1).stores({});
            connector.containers[name] = await db.open();
        }
        return connector.containers[name];
    }
}
