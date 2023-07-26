import { TransactionConfig, TransactionReceipt } from 'web3-core';
import { DSA } from './dsa';
export interface TransactionCallbacks {
    onReceipt?: (receipt: TransactionReceipt) => void;
    onConfirmation?: (confirmationNumber: number, receipt: TransactionReceipt, latestBlockHash?: string) => void;
}
export declare class Transaction {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Send transaction and get transaction hash.
     */
    send: (transactionConfig: TransactionConfig, transactionCallbacks?: TransactionCallbacks) => Promise<string>;
    /**
     * Cancel transaction.
     *
     * @param params.nonce
     * @param params.gasPrice .
     * @returns Transaction hash.
     */
    cancel: (params: Required<Pick<TransactionConfig, 'nonce' | 'gasPrice'>>) => Promise<string>;
    /**
     * Speed up transaction.
     *
     * @param params.transactionHash - Transaction hash.
     * @param params.gasPrice - Transaction hash.
     * @returns Transaction hash.
     */
    speedUp: (dsa: DSA, params: {
        transactionHash: string;
        gasPrice: NonNullable<TransactionConfig['gasPrice']>;
    }) => Promise<string>;
    /**
     * Get transaction Nonce.
     *
     * @param transactionHash Transaction hash to get nonce.
     */
    getNonce: (transactionHash: string) => Promise<number>;
    /**
     * Get transaction count.
     *
     * @param address Address to get transaction count for.
     * @returns Transaction count for address
     */
    getTransactionCount: (address: string) => Promise<number>;
}
