import { ECurrency } from '../../enum/ECurrency';

export interface IInstallments {
    quantity: number;
    amount: number;
    rate: number,
    currency_id: ECurrency;
}