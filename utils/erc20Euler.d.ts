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
declare type Erc20EulerInputParams = {
    token: keyof typeof TokenInfo | string;
    amount: string;
} & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce' | 'to'>;
/**
 * @param {number|string} _d. subaccount id (0 for primary and 1 - 255 for sub-account)
 * @param {address} _d.token token address or symbol
 * @param {string} _d.amount token amount
 * @param {address|string} _d.from (optional) token
 * @param {number|string} _d.to (optional)
 * @param {number|string} _d.gasPrice (optional) not optional in "node"
 * @param {number|string} _d.gas (optional) not optional in "node"
 * @param {number|string} _d.nonce (optional) not optional in "node"
 */
declare type Erc20EulerApproveSubAccountInputParams = {
    subAccountId: number | string;
    token: keyof typeof TokenInfo | string;
    amount: string;
} & Pick<TransactionConfig, 'from' | 'gas' | 'gasPrice' | 'maxFeePerGas' | 'maxPriorityFeePerGas' | 'nonce' | 'to'>;
/**
 * generic ERC20 token methods
 */
export declare class Erc20Euler {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Transfer
     */
    transfer(params: Erc20EulerInputParams): Promise<string>;
    /**
     * Transfer Tx object
     */
    transferTxObj(params: Erc20EulerInputParams): Promise<TransactionConfig>;
    /**
     * Approve Sub Account
     */
    approveSubAccount(params: Erc20EulerApproveSubAccountInputParams): Promise<string>;
    /**
    * Approve Token Tx Obj
    */
    approveSubAccTxObj(params: Erc20EulerApproveSubAccountInputParams): Promise<TransactionConfig>;
}
export {};
