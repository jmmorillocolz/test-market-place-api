import { NextFunction, Request, Response, Router } from 'express';
import { EStatusCode } from '../../../shared/enums/EStatusCode';
import { formattedResponse } from '../../../../src/shared/providers/httpFormats';
import { SearchController } from '../controller/SearchController';
import { IFound } from '../interface/IFound';
import { IDetail } from '../interface/IDetail';

const SearchRoute = Router();
const rootPath = '/items';

SearchRoute.get(`${rootPath}`, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { q } = request.query;
        const found: IFound = await SearchController.search(q as string);
        const foundFormatted = formattedResponse<IFound>(EStatusCode.Success, 'Éxito al obtener los resultados de la búsqueda', found);
        response.send(foundFormatted);
        next();
    } catch(error) {
        next(error);
    }
})
    .get(`${rootPath}/:id`, async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { id } = request.params;
            const detail: IDetail = await SearchController.detail(id as string);
            const detailFormatted = formattedResponse<IDetail>(EStatusCode.Success, 'Éxito al obtener el detalle del producto', detail);
            response.send(detailFormatted);
            next();
        } catch(error) {
            next(error);
        }
    })

export default SearchRoute;
