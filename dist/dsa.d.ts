import Web3 from 'web3';
import { TransactionConfig } from 'web3-core';
import { Accounts } from './accounts';
import { CastHelpers } from './cast-helpers';
import { Internal, Version } from './internal';
import { Spells } from './spells';
import { Transaction, TransactionCallbacks } from './transaction';
import { Doughpool_v2 } from './resolvers/doughpool_v2';
import { Avocado } from './resolvers/avocado';
import { Erc20 } from './utils/erc20';
import { Erc20Euler } from './utils/erc20Euler';
import { Erc721 } from './utils/erc721';
export declare type DSAConfig = {
    web3: Web3;
    mode: 'node';
    privateKey: string;
} | {
    web3: Web3;
    mode: 'simulation';
    publicKey: string;
} | {
    web3: Web3;
    mode?: 'browser';
};
export declare type ChainId = 1 | 137 | 42161 | 43114 | 10 | 250 | 1220;
export interface Instance {
    id: number;
    address: string;
    version: Version;
    chainId: ChainId;
}
/**
 * @param _d.spells the spells instance
 * @param _d.origin (optional)
 * @param _d.to (optional)
 * @param _d.from (optional)
 * @param _d.value (optional)
 * @param _d.gasPrice (optional only for "browser" mode)
 * @param _d.maxFeePerGas (optional only for "browser" mode)
 * @param _d.maxPriorityFeePerGas (optional only for "browser" mode)
 * @param _d.gas (optional)
 * @param {number|string} _d.nonce (optional) txn nonce (mostly for node implementation)
 */
declare type CastParams = {
    spells: Spells;
    origin?: string;
} & TransactionCallbacks & Pick<TransactionConfig, 'from' | 'to' | 'value' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce'>;
/**
 * @param _d.castData cast calldata
 * @param _d.origin (optional)
 * @param _d.to (optional)
 * @param _d.from (optional)
 * @param _d.value (optional)
 * @param _d.gasPrice (optional only for "browser" mode)
 * @param _d.maxFeePerGas (optional only for "browser" mode)
 * @param _d.maxPriorityFeePerGas (optional only for "browser" mode)
 * @param _d.gas (optional)
 * @param {number|string} _d.nonce (optional) txn nonce (mostly for node implementation)
 */
declare type CastDataParams = {
    castData: string;
    origin?: string;
} & TransactionCallbacks & Pick<TransactionConfig, 'from' | 'to' | 'value' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce'>;
/**
 * @param {address} _d.authority (optional)
 * @param {address} _d.origin (optional)
 * @param {address} _d.from (optional)
 * @param {number} _d.version (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.maxFeePerGas (optional)
 * @param {number|string} _d.maxPriorityFeePerGas (optional)
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
declare type BuildParams = {
    authority?: string;
    origin?: string;
    version?: Instance['version'];
} & TransactionCallbacks & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce'>;
export declare class DSA {
    static readonly version: string;
    readonly config: DSAConfig;
    get web3(): Web3;
    get mode(): "node" | "simulation" | "browser" | undefined;
    origin: string;
    /**
     * Sets the origin of interactions.
     *
     * @param origin The origin address for affiliation and on-chain analytics.
     */
    setOrigin(origin: string): void;
    instance: Instance;
    readonly maxValue = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    readonly maxVal: () => string;
    readonly erc20: Erc20;
    readonly erc20Euler: Erc20Euler;
    readonly erc721: Erc721;
    readonly internal: Internal;
    readonly castHelpers: CastHelpers;
    readonly transaction: Transaction;
    readonly doughpool_v2: Doughpool_v2;
    readonly avocado: Avocado;
    readonly accounts: Accounts;
    encodeSpells: (params: Spells | {
        spells: Spells;
    }, version?: 1 | 2 | undefined, chainId?: ChainId | undefined) => {
        targets: string[];
        spells: string[];
    };
    sendTransaction: (transactionConfig: TransactionConfig, transactionCallbacks?: TransactionCallbacks | undefined) => Promise<string>;
    count: () => Promise<any>;
    getAccounts: (authority: string) => Promise<{
        id: number;
        address: string;
        version: number;
    }[]>;
    getAuthById: (id: number) => Promise<any>;
    encodeCastABI: (params: Spells | ({
        spells: Spells;
        origin?: string | undefined;
        version?: 1 | 2 | undefined;
        to?: string | undefined;
    } & Pick<TransactionConfig, "to">)) => string;
    estimateCastGas: (params: {
        spells: Spells;
    } & Pick<TransactionConfig, "from" | "to" | "value">) => Promise<number>;
    convertToAvocadoActions: (spells: Spells, version: 1 | 2, chainId: ChainId) => Promise<import("./resolvers/avocado").AvocadoAction[]>;
    /**
     * @param config A `web3` instance or a DSAConfig
     */
    constructor(config: Web3 | DSAConfig, chainId?: ChainId);
    /**
     * Sets the current DSA instance.
     */
    setInstance(id: number): Promise<Instance>;
    /**
     * Refreshes the chain Id and sets it on the instance
     */
    refreshChainId(): Promise<void>;
    getAccountIdDetails(instanceId: Instance['id']): Promise<{
        id: any;
        address: any;
        version: 1 | 2;
        chainId: ChainId;
    }>;
    /**
     * Sets the current DSA ID instance.
     *
     * @param id DSA ID
     */
    setAccount(id: number): Promise<Instance>;
    /**
     * Build a new DSA.
     */
    build(params: BuildParams): Promise<string>;
    /**
     * Build new DSA txObj
     */
    buildTxObj(params: BuildParams): Promise<TransactionConfig>;
    /**
     * Build new DSA transactionConfiguration.
     *
     * @param {address} _d.authority (optional)
     * @param {address} _d.origin (optional)
     * @param {number|string} _d.gasPrice (optional) not optional in "node"
     * @param {number|string} _d.gas (optional) not optional in "node"
     * @param {number|string} _d.nonce (optional) not optional in "node"
     */
    buildTransactionConfig(params: {
        authority?: string;
        origin?: string;
    } & Pick<TransactionConfig, 'from' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'gas' | 'nonce'>): Promise<TransactionConfig>;
    /**
     * Creates a Spells instance.
     *
     * Example usage:
     *
     * ```
     * dsa.Spell()
     *  .add(...)
     *  .add(...)
     *  .cast(...)
     * ```
     */
    Spell(): {
        cast: (params?: Omit<CastParams, 'spells'>) => Promise<string | undefined>;
        estimateCastGas: (params?: Omit<CastHelpers['estimateGas'], 'spells'>) => Promise<number | undefined>;
        encodeCastABI: (params?: Omit<CastHelpers['encodeABI'], 'spells'>) => Promise<string | undefined>;
        encodeSpells: (params?: Omit<Internal['encodeSpells'], 'spells'>) => Promise<{
            targets: string[];
            spells: string[];
        } | undefined>;
        convertToAvocadoActions: () => Promise<import("./resolvers/avocado").AvocadoAction[] | undefined>;
        data: import("./spells").Spell[];
        add(spell: import("./spells").Spell): any;
    };
    cast(params: Spells | CastParams): Promise<string>;
    castData(params: string | CastDataParams): Promise<string>;
    private getData;
}
export {};
