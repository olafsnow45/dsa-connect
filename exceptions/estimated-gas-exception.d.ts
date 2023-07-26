import { EstimateGasParams } from '../internal';
export declare class EstimatedGasException extends Error {
    error: Error;
    data: {
        data: string;
    } & EstimateGasParams;
    constructor(error: Error, data: {
        data: string;
    } & EstimateGasParams);
}
