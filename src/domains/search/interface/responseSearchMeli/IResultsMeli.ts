import { EBuyingMode } from '../../enum/EBuyingMode'
import { ECondition } from '../../enum/ECondition'
import { ECurrency } from '../../enum/ECurrency'
import { EListingTypeId } from '../../enum/EListingTypeId'
import { IAddres } from './IAddres'
import { IAttribute } from './IAttribute'
import { IDifferentialPricing } from './IDifferentialPricing'
import { IInstallments } from './IInstallments'
import { IPrice } from './IPrice'
import { IPrices } from './IPrices'
import { ISeller } from './ISeller'
import { ISellerAddress } from './ISellerAddress'
import { IShipping } from './IShipping'

export interface IResultsMeli {
    id: string;
    site_id: string;
    title: string;
    seller: ISeller;
    price: number;
    prices: IPrices;
    sale_price?: any;
    currency_id: ECurrency;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: EBuyingMode,
    listing_type_id: EListingTypeId,
    stop_time: Date,
    condition: ECondition,
    permalink: string,
    thumbnail: string,
    thumbnail_id: string,
    accepts_mercadopago: boolean,
    installments: IInstallments,
    address: IAddres;
    shipping: IShipping;
    seller_address: ISellerAddress;
    attributes: IAttribute[];
    original_price?: number;
    category_id: string;
    official_store_id?: number;
    domain_id: string;
    catalog_product_id: string;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
    offer_score?: any;
    offer_share?: any;
    match_score?: any;
    winner_item_id?: any;
    melicoin?: any;
    discounts?: any;
    differential_pricing: IDifferentialPricing;
}