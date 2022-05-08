import axios from "axios";
import { categoryMock, decriptionMockService, detailMockService } from "../mockups/detailsMock";
import { searchCategories, searchResponseMockService } from "../mockups/searchMock";
import { SearchService } from "./SearchService";

describe('SearchService Test', () => {
    it('search - success', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: searchResponseMockService });
        const { results, available_filters } = await SearchService.search('iphone');
        expect(results.length).toBeGreaterThan(0);
        expect(available_filters.length).toBeGreaterThan(0);
    });

    it('searchCategories - success', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: searchCategories });
        const { results, available_filters } = await SearchService.searchCategories('iphone');
        expect(results.length).toBeGreaterThan(0);
        expect(available_filters.length).toBeGreaterThan(0);
        expect(available_filters[0].id).toEqual('category');
    });

    it('detail - success', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: detailMockService });
        const { category_id, id, pictures } = await SearchService.detail('MLA931455240');
        expect(pictures.length).toBeGreaterThan(0);
        expect(category_id).toEqual('MLA1055');
        expect(id).toEqual('MLA931455240');
    });

    it('detailDescription - success', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: decriptionMockService });
        const { plain_text } = await SearchService.detailDescription('MLA931455240');
        expect(plain_text.length).toBeGreaterThan(0);
        expect(plain_text).toEqual(decriptionMockService.plain_text);
    });

    it('category - success', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: categoryMock });
        const { name, id, picture } = await SearchService.category('MLA1055');
        expect(id).toEqual(categoryMock.id);
        expect(name).toEqual(categoryMock.name);
        expect(picture).toEqual(categoryMock.picture);
    });
});