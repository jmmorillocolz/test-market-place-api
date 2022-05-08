import { IPresentation } from './IPresentation';
import { IPrice } from './IPrice';
import { IReferencePrice } from './IReferencePrice';

export interface IPrices {
    id: string;
    prices: IPrice[];
    presentation: IPresentation;
    payment_method_prices: any[];
    reference_prices: IReferencePrice[];
    purchase_discounts: any[];
}