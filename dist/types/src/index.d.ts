import { Dexie } from 'dexie';
import { EngineUtilities } from '@datapos/datapos-shared/engine';
import { ToolConfig } from '@datapos/datapos-shared/component/tool';
import { ConnectorConfig, ConnectorInterface, CreateObjectOptions, DropObjectOptions, FindObjectOptions, FindObjectResult, GetRecordOptions, GetRecordResult, ListNodesOptions, ListNodesResult, PreviewObjectOptions, RemoveRecordsOptions, RetrieveRecordsOptions, RetrieveRecordsSummary, UpsertRecordsOptions } from '@datapos/datapos-shared/component/connector';
import { ParsingRecord, PreviewConfig } from '@datapos/datapos-shared/component/dataView';
interface ExtendedConnectorInterface extends ConnectorInterface {
    containers: Record<string, Dexie>;
}
export default class DexieJSConnector implements ExtendedConnectorInterface {
    abortController: AbortController | undefined;
    readonly config: ConnectorConfig;
    engineUtilities: EngineUtilities;
    readonly toolConfigs: ToolConfig[];
    containers: Record<string, Dexie>;
    constructor(engineUtilities: EngineUtilities, toolConfigs: ToolConfig[]);
    abortOperation(): void;
    createObject(options: CreateObjectOptions): Promise<void>;
    dropObject(options: DropObjectOptions): Promise<void>;
    findObject(options: FindObjectOptions): Promise<FindObjectResult>;
    getRecord(options: GetRecordOptions): Promise<GetRecordResult>;
    listNodes(settings: ListNodesOptions): Promise<ListNodesResult>;
    previewObject(options: PreviewObjectOptions): Promise<PreviewConfig>;
    upsertRecords(options: UpsertRecordsOptions): Promise<void>;
    removeRecords(options: RemoveRecordsOptions): Promise<void>;
    retrieveRecords(options: RetrieveRecordsOptions, chunk: (records: ParsingRecord[]) => void, complete: (result: RetrieveRecordsSummary) => void): Promise<void>;
    private establishContainer;
    private establishObjectIdentifiers;
}
export {};
