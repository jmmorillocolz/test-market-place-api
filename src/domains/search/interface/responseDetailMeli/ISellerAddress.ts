import { ICity } from '../responseSearchMeli/ICity';
import { ICountry } from '../responseSearchMeli/ICountry';
import { IState } from '../responseSearchMeli/IState';
import { ISearchLocation } from './ISearchLocation';

export interface ISellerAddress {
    city: ICity;
    state: IState;
    country: ICountry;
    search_location: ISearchLocation;
    id: number;
}
