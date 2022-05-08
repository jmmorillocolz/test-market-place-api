import { IConditions } from './IConditions';

export interface IReferencePrice {
    id: string;
    type: string;
    conditions: IConditions;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: Date;
}