import { ChainId, DSA } from '../dsa';
import { Spells } from '../spells';
import { Version } from '../internal';
export declare class Doughpool_v4 {
    private dsa;
    constructor(dsa: DSA);
    /**
    * Encode Doughpool_v4 flashBorrowWithCast calldata arg.
    *
    * @param spells The spells instance
    */
    encodeFlashCastData(spells: Spells, version?: Version, chainId?: ChainId): string;
}
