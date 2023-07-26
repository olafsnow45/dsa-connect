import { DSA } from '../dsa';
import { TokenInfo } from '../data/token-info';
import { TransactionConfig } from 'web3-core';
/**
 * @param {address} _d.token token address or symbol
 * @param {string} _d.amount token amount
 * @param {address|string} _d.from (optional) token
 * @param {number|string} _d.to (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
declare type Erc20InputParams = {
    token: keyof typeof TokenInfo | string;
    amount: string;
} & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce' | 'to'>;
/**
 * generic ERC20 token methods
 */
export declare class Erc20 {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Transfer
     */
    transfer(params: Erc20InputParams): Promise<string>;
    /**
     * Transfer Tx object
     */
    transferTxObj(params: Erc20InputParams): Promise<TransactionConfig>;
    /**
     * Approve
     */
    approve(params: Erc20InputParams): Promise<string>;
    /**
     * Approve Token Tx Obj
     */
    approveTxObj(params: Erc20InputParams): Promise<TransactionConfig>;
}
export {};
