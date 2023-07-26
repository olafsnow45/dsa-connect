import { DSA } from '../dsa';
import { TokenInfo } from '../data/token-info';
import { TransactionConfig } from 'web3-core';
/**
 * @param {address} _d.token token address or symbol
 * @param {string} _d.tokenId token id
 * @param {address|string} _d.from (optional) token
 * @param {number|string} _d.to (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
declare type Erc721InputParams = {
    token: keyof typeof TokenInfo | string;
    tokenId: number;
} & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce' | 'to'>;
/**
 * generic ERC20 token methods
 */
export declare class Erc721 {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Transfer
     */
    transfer(params: Erc721InputParams): Promise<string>;
    /**
     * Transfer Tx object
     */
    transferTxObj(params: Erc721InputParams): Promise<TransactionConfig>;
    /**
     * Approve
     */
    approve(params: Erc721InputParams): Promise<string>;
    /**
     * Approve Token Tx Obj
     */
    approveTxObj(params: Erc721InputParams): Promise<TransactionConfig>;
}
export {};
