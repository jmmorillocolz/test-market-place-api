import { IAttribute } from '../responseSearchMeli/IAttribute';
import { IPicture } from './IPicture';
import { ISaleTerm } from './ISaleTerm';
import { ISellerAddress } from './ISellerAddress';
import { IShipping } from './IShipping';

export interface IDetailItemMeli {
    id: string;
    site_id: string;
    title: string;
    subtitle?: any;
    seller_id: number;
    category_id: string;
    official_store_id?: any;
    price: number;
    base_price: number;
    original_price?: any;
    currency_id: string;
    initial_quantity: number;
    available_quantity: number;
    sold_quantity: number;
    sale_terms: ISaleTerm[];
    buying_mode: string;
    listing_type_id: string;
    start_time: Date;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    secure_thumbnail: string;
    pictures: IPicture[];
    video_id?: any;
    descriptions: any[];
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: any[];
    shipping: IShipping;
    international_delivery_mode: string;
    seller_address: ISellerAddress;
    seller_contact?: any;
    location: unknown;
    coverage_areas: any[];
    attributes: IAttribute[];
    warnings: any[];
    listing_source: string;
    variations: any[];
    status: string;
    sub_status: any[];
    tags: string[];
    warranty: string;
    catalog_product_id: string;
    domain_id: string;
    parent_item_id?: any;
    differential_pricing?: any;
    deal_ids: string[];
    automatic_relist: boolean;
    date_created: Date;
    last_updated: Date;
    health?: any;
    catalog_listing: boolean;
    channels: string[];
}