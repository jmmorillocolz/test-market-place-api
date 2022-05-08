import { IMetrics } from './IMetrics';
import { ITransactions } from './ITransactions';

export interface ISellerReputation {
    power_seller_status: string;
    level_id: string;
    metrics: IMetrics;
    transactions: ITransactions;
}