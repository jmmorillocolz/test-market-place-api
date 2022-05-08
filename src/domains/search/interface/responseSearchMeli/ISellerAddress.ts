import { ICity } from './ICity';
import { ICountry } from './ICountry';
import { IState } from './IState';

export interface ISellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: ICountry;
    state: IState;
    city: ICity;
    latitude: string;
    longitude: string;
}
