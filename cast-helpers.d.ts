import { TransactionConfig } from 'web3-core';
import DSA, { ChainId } from '.';
import { Version } from './internal';
import { Spells } from './spells';
declare type EncodeAbiParams = {
    spells: Spells;
    origin?: string;
    version?: 1 | 2;
    to?: string;
} & Pick<TransactionConfig, 'to'>;
export declare class CastHelpers {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Returns the estimated gas cost.
     *
     * @param params.from the from address
     * @param params.to the to address
     * @param params.value eth value
     * @param params.spells cast spells
     */
    estimateGas: (params: {
        spells: Spells;
    } & Pick<TransactionConfig, "to" | "from" | "value">) => Promise<number>;
    /**
     * Returns the encoded cast ABI byte code to send via a transaction or call.
     *
     * @param params.spells The spells instance
     * @param params.to (optional) the address of the smart contract to call
     * @param params.origin (optional) the transaction origin source
     */
    encodeABI: (params: Spells | EncodeAbiParams) => string;
    flashBorrowSpellsConvert: (params: Spells, version: Version, chainId: ChainId) => Spells;
}
export {};
