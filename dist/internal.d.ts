import { TransactionConfig } from 'web3-core';
import { AbiItem } from 'web3-utils';
import DSA, { ChainId } from '.';
import { Abi } from './abi';
import { Connector } from "./abi/connectors";
import { TokenInfo } from './data/token-info';
import { Spells } from './spells';
export interface GetTransactionConfigParams {
    from: NonNullable<TransactionConfig['from']>;
    to: NonNullable<TransactionConfig['to']>;
    data: NonNullable<TransactionConfig['data']>;
    value?: TransactionConfig['value'];
    gas?: TransactionConfig['gas'];
    gasPrice?: TransactionConfig['gasPrice'];
    nonce?: TransactionConfig['nonce'];
    maxPriorityFeePerGas?: TransactionConfig['maxPriorityFeePerGas'];
    maxFeePerGas?: TransactionConfig['maxFeePerGas'];
}
export declare type Version = keyof typeof Abi.connectors.versions;
export { Connector } from './abi/connectors';
export declare type EstimateGasParams = {
    abi: AbiItem;
    args: any;
} & Required<Pick<TransactionConfig, 'from' | 'to' | 'value'>>;
export declare class Internal {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Returns TransactionObject for any calls.
     *
     * Parameter `gasPrice` must be defined in mode `node` and is optional in mode `browser`.
     *
     * Parameter `nonce` only takes effect in mode `node`.
     *
     * @param params.from
     * @param params.to
     * @param params.callData
     * @param params.value (optional)
     * @param params.gas (optional)
     * @param params.gasPrice (optional only for "browser" mode)
     * @param params.nonce (optional) mostly for "node" mode
     * @param params.maxFeePerGas (optional only for "browser" mode)
     * @param params.maxPriorityFeePerGas (optional only for "browser" mode)
     */
    getTransactionConfig: (params: GetTransactionConfigParams) => Promise<TransactionConfig>;
    private getNonce;
    private getGas;
    /**
     * Returns the ABI interface for any DSA contract.
     */
    getInterface: (abiItems: AbiItem[], method: string) => AbiItem | undefined;
    /**
     * Returns encoded data of any calls.
     */
    encodeMethod: (params: {
        connector: Connector;
        method: string;
        args: string[];
    }, version?: Version) => string;
    /**
     * Returns encoded data of spells (used via cast() mostly).
     *
     * @param params the spells instance
     * OR
     * @param params.spells the spells instance
     */
    encodeSpells: (params: Spells | {
        spells: Spells;
    }, version?: Version, chainId?: ChainId) => {
        targets: string[];
        spells: string[];
    };
    private getSpells;
    /**
     * Returns the input interface required for cast().
     */
    private getTarget;
    /**
     * Returns the input interface required for cast().
     */
    getAddress: () => Promise<string | undefined>;
    /**
     * Returns the address from token key OR checksum the address if not.
     */
    filterAddress: (token: keyof typeof TokenInfo | string) => string;
    /**
     * Returns the estimated gas cost.
     *
     * @param params.from the from address
     * @param params.to the to address
     * @param params.abi the ABI method single interface
     * @param params.args the method arguments
     * @param params.value the call ETH value
     */
    estimateGas: (params: EstimateGasParams) => Promise<number>;
}
