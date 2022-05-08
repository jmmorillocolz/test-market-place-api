import { IEshop } from './IEshop';
import { ISellerReputation } from './ISellerReputation';

export interface ISeller {
    id: number;
    permalink: string;
    registration_date: Date;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    eshop: IEshop;
    seller_reputation: ISellerReputation;
}