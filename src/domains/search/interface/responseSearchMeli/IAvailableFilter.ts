import { IValue } from './IValue';

export interface IAvailableFilter {
    id: string;
    name: string;
    type: string;
    values: IValue[];
}