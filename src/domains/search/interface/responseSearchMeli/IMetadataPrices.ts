import { EPromotionType } from '../../enum/EPromotionType'

export interface IMetadataPrices {
    campaign_id?: string;
    promotion_id?: string;
    promotion_type?: EPromotionType;
    discount_meli_amount?: number;
    campaign_discount_percentage?: number;
    campaign_end_date?: Date;
    order_item_price?: number;
    funding_mode?: string;
}
