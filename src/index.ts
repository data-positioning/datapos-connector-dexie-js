// Dependencies - Framework
import { ConnectorError } from '@datapos/datapos-share-core';
import type { ConnectionConfig, Connector, ConnectorCallbackData, ConnectorConfig } from '@datapos/datapos-share-core';
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

    async find(id: string): Promise<FindResult | undefined> {
        console.log('find', id);
        return undefined;
    }

    async list(callback: (data: ConnectorCallbackData) => void, settings: ListSettings): Promise<ListResult> {
        return new Promise((resolve, reject) => {
            try {
                resolve({ cursor: undefined, isMore: false, connectionItemConfigs: [], totalCount: 0 });
            } catch (error) {
                reject(constructErrorAndTidyUp(this, ERROR_LIST_ITEMS_FAILED, 'listItems.1', error));
            }
        });
    }
}

// Utilities - Construct Error and Tidy Up
const constructErrorAndTidyUp = (connector: Connector, message: string, context: string, error: unknown): ConnectorError => {
    connector.abortController = null;
    return new ConnectorError(message, { locator: `${config.id}.${context}` }, undefined, error);
};
