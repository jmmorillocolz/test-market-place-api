import { IFound } from '../interface/IFound';
import { IAvailableFilter } from '../interface/responseSearchMeli/IAvailableFilter';
import { IResultsMeli } from '../interface/responseSearchMeli/IResultsMeli';
import { ISearchFromMeli } from '../interface/responseSearchMeli/ISearchFromMeli';
import { IValue } from '../interface/responseSearchMeli/IValue';
import { SearchService } from '../service/SearchService';
import { IItem } from '../interface/IItem';
import { IAuthor } from '../interface/IAuthor';
import { ApiConfig } from '../../../../src/config/ApiConfig';
import { IDetail } from '../interface/IDetail';
import { IDetailItemMeli } from '../interface/responseDetailMeli/IDetailItemMeli';

/**
 * Class SearchController
 * Controls requests to services. Applies formatting to data returned by services
 */
export class SearchController {

    /**
     * Get the list of products associated with the entered word
     * @param {string} toSearch
     * @returns {Promise<IFound>}
     */
    public static async search(toSearch: string): Promise<IFound> {
        const res = await SearchService.search(toSearch);
        const formattedSearch: IFound = await this.formattedSearch(res);

        return formattedSearch;
    }

    /**
     * Obtains the detail of the product according to the indicated Id
     * @param {string} idItem
     * @returns {Promise<IDetail>}
     */
    public static async detail(idItem: string): Promise<IDetail> {
        const detail = await SearchService.detail(idItem);
        const formattedItems = await this.formattedItemFromDetails(detail);

        return formattedItems;
    }

    /**
     * List of categories
     * @param {IAvailableFilter[]} filters 
     * @returns {Promise<string[]>}
     */
    private static async listCategories(filters: IAvailableFilter[]): Promise<string[]> {
        const [categoriesName] = filters.filter(filter => filter.id === 'category')
            .map( res => res.values.sort((after, before) => ( after.results && before.results ? after.results > before.results ? -1 : 1 : 1))
            .map( category => category.name));
        
        return categoriesName;
    }

    /**
     * Formats the list of items to type IItem
     * @param {IAvailableFilter[]} results 
     * @returns {Promise<string[]>}
     */
     private static async formattedItemsFromSearch(results: IResultsMeli[]): Promise<IItem[]> {
        return results.map((result) => {
            const { id, title, thumbnail: picture, condition, price: amount, shipping: { free_shipping }, currency_id: currency }  = result;
            const item: IItem = {
                id,
                title,
                price: {
                    currency,
                    amount: Math.floor(amount) === amount ? amount : Number(amount.toString().split('.')[0]),
                    decimals: Math.floor(amount) === amount ? 0 : Number(amount.toString().split('.')[1]),
                },
                picture,
                condition,
                free_shipping,
            };
            return item;
        });
    }

    /**
     * Formatted search
     * @param {ISearchFromMeli} found 
     * @returns {Promise<IFound>}
     */
    private static async formattedSearch(found: ISearchFromMeli): Promise<IFound> {
        const foundCategories = await SearchService.searchCategories(found.query as string);
        const categories = await this.listCategories(foundCategories.available_filters);
        const items = await this.formattedItemsFromSearch(found.results);
        const  author: IAuthor = ApiConfig.author;

        return {
            author,
            categories,
            items,
        } as IFound;
    }

    /**
     * Formatted item from details
     * @param {IDetailItemMeli} found 
     * @returns {Promise<IDetail>}
     */
     private static async formattedItemFromDetails(found: IDetailItemMeli): Promise<IDetail> {
        const  author: IAuthor = ApiConfig.author;
        const { id, title, pictures, condition, price: amount, shipping: { free_shipping }, currency_id: currency, sold_quantity, category_id }  = found;
        const [pic] = pictures;
        const { plain_text: description } = await SearchService.detailDescription(id);
        const { name } = await SearchService.category(category_id);

        const item: IItem = {
            id,
            title,
            price: {
                currency,
                amount: Math.floor(amount) === amount ? amount : Number(amount.toString().split('.')[0]),
                decimals: Math.floor(amount) === amount ? 0 : Number(amount.toString().split('.')[1]),
            },
            picture: pic.url,
            condition,
            free_shipping,
            sold_quantity,
            description
        };

        return { item, author, categories: [name] };
    }
}

