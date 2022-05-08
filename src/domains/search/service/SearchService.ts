import axios  from 'axios';
import { IResponse } from 'src/shared/interfaces/IResponse';
import { urlBacked } from '../../../config/urls';
import { ICategoryMeli } from '../interface/responseCategoryMeli/ICategoryMeli';
import { IDescription } from '../interface/responseDetailMeli/IDescription';
import { IDetailItemMeli } from '../interface/responseDetailMeli/IDetailItemMeli';
import { ISearchFromMeli } from '../interface/responseSearchMeli/ISearchFromMeli';

/**
 * SearchService
 * Connect with MELI services
 */
export class SearchService {
    /**
     * 
     */
     public static async search(toSearch: string): Promise<ISearchFromMeli> {
        const url = urlBacked.meli.search.replace(':query', toSearch);
        const { data } = await axios.get<ISearchFromMeli>(`${url}&limit=4`);

        return data;
    }

    /**
     * Get the list of categories associated to a search  
     * @param {string} toSearch 
     * @returns {Promise<ISearchFromMeli>}
     */
    public static async searchCategories(toSearch: string): Promise<ISearchFromMeli> {
        const url = urlBacked.meli.searchCategories.replace(':query', toSearch);
        const { data } = await axios.get<ISearchFromMeli>(url);

        return data;
    }

    /**
     * Obtains the detail of the product according to the indicated Id
     * @param {string} idItem
     * @returns {Promise<IDetailItemMeli>}
     */
     public static async detail(idItem: string): Promise<IDetailItemMeli> {
        const url = urlBacked.meli.detail.replace(':id', idItem);
        const { data } = await axios.get<IDetailItemMeli>(url);

        return data;
    }

    /**
     * Obtains teh description of a item 
     * @param {string} idItem
     * @returns {Promise<IDescription>}
     */
     public static async detailDescription(idItem: string): Promise<IDescription> {
        const url = urlBacked.meli.detailDescription.replace(':id', idItem);
        const { data } = await axios.get<IDescription>(url);

        return data;
    }

    /**
     * Obtains the category
     * @param {string} idCategory
     * @returns {Promise<ICategoryMeli>}
     */
     public static async category(idCategory: string): Promise<ICategoryMeli> {
        const url = urlBacked.meli.category.replace(':id', idCategory);
        const { data } = await axios.get<ICategoryMeli>(url);

        return data;
    }
}