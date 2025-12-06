import { default as Dexie } from 'dexie';
import { DropSettings, RemoveSettings, UpsertSettings, ConnectionConfig, Connector, ConnectorConfig, ConnectorTools, CreateSettings, FindResult, FindSettings, GetResult, GetSettings, ListResult, ListSettings, PreviewResult, PreviewSettings, RetrieveSettings, RetrieveSummary } from '@datapos/datapos-shared';
declare module '@datapos/datapos-shared' {
    interface Connector {
        containers: Record<string, Dexie>;
    }
}
export default class DexieJSConnector implements Connector {
    abortController: AbortController | undefined;
    readonly config: ConnectorConfig;
    readonly connectionConfig: ConnectionConfig;
    readonly tools: ConnectorTools;
    containers: Record<string, Dexie>;
    constructor(connectionConfig: ConnectionConfig, tools: ConnectorTools);
    abortOperation(connector: DexieJSConnector): void;
    createObject(connector: DexieJSConnector, settings: CreateSettings): Promise<void>;
    dropObject(connector: DexieJSConnector, settings: DropSettings): Promise<void>;
    findObject(connector: DexieJSConnector, settings: FindSettings): Promise<FindResult>;
    getRecord(connector: DexieJSConnector, settings: GetSettings): Promise<GetResult>;
    listNodes(connector: DexieJSConnector, settings: ListSettings): Promise<ListResult>;
    previewObject(connector: DexieJSConnector, settings: PreviewSettings): Promise<PreviewResult>;
    upsertRecords(connector: DexieJSConnector, settings: UpsertSettings): Promise<void>;
    removeRecords(connector: DexieJSConnector, settings: RemoveSettings): Promise<void>;
    retrieveRecords(connector: DexieJSConnector, settings: RetrieveSettings, chunk: (records: Record<string, unknown>[]) => void, complete: (result: RetrieveSummary) => void): Promise<void>;
    private establishContainer;
}
