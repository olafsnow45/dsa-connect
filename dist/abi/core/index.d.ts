export * as accountV1 from './v1/account';
export * as connectorsV1 from './v1/connector';
export * as eventsV1 from './v1/events';
export * as accountV2_M1 from './v2/accountM1';
export * as connectorsV2_M1 from './v2/connectorsM1';
export * as accountProxy from './v2/accountProxy';
export * as implementations from './v2/implementations';
export * as accountDefault from './v2/accountDefault';
export * as index from './indexItem';
export * as list from './list';
export * as read from './read';
import * as connectorsV1 from './v1/connector';
import * as eventsV1 from './v1/events';
import * as accountProxy from './v2/accountProxy';
import * as implementations from './v2/implementations';
import * as accountDefault from './v2/accountDefault';
export declare const core: {
    index: import("web3-utils").AbiItem[];
    list: import("web3-utils").AbiItem[];
    read: import("web3-utils").AbiItem[];
    versions: {
        1: {
            account: import("web3-utils").AbiItem[];
            connectors: typeof connectorsV1;
            events: typeof eventsV1;
        };
        2: {
            accountProxy: typeof accountProxy;
            accountDefault: typeof accountDefault;
            implementations: typeof implementations;
            account: import("web3-utils").AbiItem[];
            connectors: import("web3-utils").AbiItem[];
        };
    };
};
