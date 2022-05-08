import { ApiConfig } from "./ApiConfig";
export const urlBacked = {
    meli: {
        search: `${ApiConfig.meli}/sites/MLA/searssch?q=:query`,
        searchCategories: `${ApiConfig.meli}/sites/MLA/search?q=:query/categories`,
        detail: `${ApiConfig.meli}/items/:id`,
        detailDescription: `${ApiConfig.meli}/items/:id/description`,
        category: `${ApiConfig.meli}/categories/:id`,
    },
};
