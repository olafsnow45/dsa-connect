import { Connector } from './internal';
export declare type Spell = {
    /**
     * The from address.
     */
    connector: Connector;
    /**
     * The to address.
     */
    method: string;
    /**
     * The ABI interface.
     */
    args: any[];
};
export declare class Spells {
    data: Spell[];
    add(spell: Spell): this;
}
