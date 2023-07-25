import { DSA } from './dsa';
export declare class Accounts {
    private dsa;
    constructor(dsa: DSA);
    /**
     * Global number of DSAs.
     */
    count: () => Promise<any>;
    /**
     * Returns accounts in a simple array of objects for addresses owned by the address.
     *
     * @param authority The ethereum address or .eth name
     */
    getAccounts: (authority: string) => Promise<{
        id: number;
        address: string;
        version: number;
    }[]>;
    private getAuthorityAddress;
    /**
     * Returns accounts in a simple array of objects.
     *
     * @param id The DSA ID.
     */
    getAuthoritiesById: (id: number) => Promise<any>;
    /**
     * Returns accounts in a simple array of objects.
     *
     * @param address The DSA address
     */
    private getAuthoritiesByAddress;
    /**
     * Returns authorities with its type in a simple array of objects.
     *
     * @param address The DSA address.
     */
    private getAuthoritiesTypes;
}
