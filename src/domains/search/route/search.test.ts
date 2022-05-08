import express from 'express';
import SearchRoute from './search';
import request from 'supertest';
import { SearchController } from '../controller/SearchController';
import { searchResponseController } from '../mockups/searchMock';
import { EStatusCode } from '../../../../src/shared/enums/EStatusCode';
import { detailControllerMock, detailMockService } from '../mockups/detailsMock';

const app = express();
app.use(express.json()).use(
    express.urlencoded({
        extended: true,
    }),
);

const basePath = '/items';
app.use('', SearchRoute);


describe('Routes Test', () => {
    it('Search - success', async () => {
        SearchController.search = jest.fn().mockResolvedValue(searchResponseController);
        const {
            body: { code, payload },
        } = await request(app).get(`${basePath}`).query('q=iphone');

        expect(code).toEqual(EStatusCode.Success);
        expect(payload).toEqual(searchResponseController);
    });

    it('Search - Error', async () => {
        SearchController.search = jest.fn().mockRejectedValue(new Error('error en el servicio'));
        await request(app).get(`${basePath}`).query('q=iphone').then((a) => {
            const error = a as unknown as Error;
            expect(error).toBeDefined();
        });
    });

    it('detail - success', async () => {
        SearchController.detail = jest.fn().mockResolvedValue(detailControllerMock);
        const {
            body: { code, payload },
        } = await request(app).get(`${basePath}/MLA816919801`);

        expect(code).toEqual(EStatusCode.Success);
        expect(payload).toEqual(detailControllerMock);
    });

    it('Search - Error', async () => {
        SearchController.detail = jest.fn().mockRejectedValue(new Error('error en el servicio'));
        await request(app).get(`${basePath}/MLA816919801`).then((a) => {
            const error = a as unknown as Error;
            expect(error).toBeDefined();
        });
    });
});