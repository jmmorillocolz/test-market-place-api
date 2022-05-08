import { IValue } from './IValue';
import { IValueStruct } from './IValueStruct';

export interface IAttribute {
    name: string;
    value_name: string;
    values: IValue[];
    source?: any;
    attribute_group_name: string;
    id: string;
    value_id: string;
    value_struct: IValueStruct;
    attribute_group_id: string;
}
