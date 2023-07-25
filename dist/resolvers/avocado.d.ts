import { DSA, ChainId } from '../dsa';
import { Spells } from '../spells';
import { Version } from '../internal';
export interface AvocadoAction {
    target: string;
    data: string;
    value: number | string;
    operation: number | string;
}
export declare class Avocado {
    private dsa;
    constructor(dsa: DSA);
    /**
    * Convert DSA spells into Avocado Action
    *
    * @param spells The spells instance
    */
    convertToActions(spells: Spells, version: Version, chainId: ChainId): Promise<AvocadoAction[]>;
    encodeFlashCastData(spells: Spells, version: Version, chainId: ChainId): Promise<string>;
}
