import { IRatings } from './IRatings';

export interface ITransactions {
    canceled: number;
    period: string;
    total: number;
    ratings: IRatings;
    completed: number;
}