import { ICity } from '../responseSearchMeli/ICity';
import { IState } from '../responseSearchMeli/IState';
import { INeighborhood } from './INeighborhood';

export interface ISearchLocation {
    neighborhood: INeighborhood;
    city: ICity;
    state: IState;
}
