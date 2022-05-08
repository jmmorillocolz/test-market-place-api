import { ApiConfig } from '../../../../src/config/ApiConfig';
import { categoryMock, decriptionMockService, detailMockService } from '../mockups/detailsMock';
import { searchCategories, searchResponseMockService } from '../mockups/searchMock';
import { SearchService } from '../service/SearchService';
import { SearchController } from './SearchController';

const newDetailMockService = detailMockService;
describe('SearchController Test', () => {
    it('search - success', async () => {
        SearchService.search = jest.fn().mockResolvedValue(searchResponseMockService);
        SearchService.searchCategories = jest.fn().mockResolvedValue(searchCategories);

        const { author, categories, items } = await SearchController.search('iphone');
        expect(author).toEqual(ApiConfig.author);
        expect(categories.length).toBeGreaterThan(0)
        expect(items.length).toBeGreaterThan(0)
    });
    it('details (price Integer)- success', async () => {
        SearchService.detail = jest.fn().mockResolvedValue(detailMockService);
        SearchService.category = jest.fn().mockResolvedValue(categoryMock);
        SearchService.detailDescription = jest.fn().mockResolvedValue(decriptionMockService);

        const { author, categories, item } = await SearchController.detail('iphone');
        expect(author).toEqual(ApiConfig.author);
        expect(categories.length).toBeGreaterThan(0)
        expect(item.id).toEqual('MLA931455240');
        expect(item.description).toEqual(decriptionMockService.plain_text);
    });

    it('details (price decimals) - success', async () => {
        newDetailMockService.price = 123400.76
        SearchService.detail = jest.fn().mockResolvedValue(newDetailMockService);
        SearchService.category = jest.fn().mockResolvedValue(categoryMock);

        const { author, categories, item } = await SearchController.detail('iphone');
        expect(author).toEqual(ApiConfig.author);
        expect(categories.length).toBeGreaterThan(0)
        expect(item.id).toEqual('MLA931455240');
    });

});