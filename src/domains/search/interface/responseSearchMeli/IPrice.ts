import { ECurrency } from '../../enum/ECurrency';
import { EExchangeRateContext } from '../../enum/EExchangeRateContext';
import { IConditions } from './IConditions';
import { IMetadataPrices } from './IMetadataPrices';

export interface IPrice {
    id: string;
    type: string;
    amount: number;
    regular_amount?: number;
    currency_id: ECurrency;
    last_updated: Date;
    conditions: IConditions;
    exchange_rate_context: EExchangeRateContext;
    metadata: IMetadataPrices;
}