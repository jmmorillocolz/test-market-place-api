import { IStruct } from './IStruct';

export interface IValue {
    id: string;
    name: string;
    struct?: IStruct;
    source?: any;
    results?: number;
}