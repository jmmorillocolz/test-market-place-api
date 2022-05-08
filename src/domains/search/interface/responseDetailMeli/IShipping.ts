import { IFreeMethod } from './IFreeMethod';

export interface IShipping {
    mode: string;
    free_methods: IFreeMethod[];
    tags: string[];
    dimensions?: any;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}
