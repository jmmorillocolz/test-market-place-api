import { IValue } from '../responseSearchMeli/IValue';
import { IValueStruct } from '../responseSearchMeli/IValueStruct';

export interface ISaleTerm {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: IValueStruct;
    values: IValue[];
}
