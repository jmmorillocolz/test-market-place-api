import { IAvailableFilter } from "./IAvailableFilter";
import { IAvailableSort } from "./IAvailableSort";
import { IPagingMeli } from "./IPagingMeli";
import { IResultsMeli } from "./IResultsMeli";
import { ISort } from "./ISort";

export interface ISearchFromMeli {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: IPagingMeli;
    results: IResultsMeli[];
    sort: ISort;
    available_sorts: IAvailableSort[];
    filters: any[];
    available_filters: IAvailableFilter[];
}
