import healthRoutes from './domains/health/route';
import { ApiConfig } from './config/ApiConfig';
import express, { NextFunction, Request, Response } from 'express';
import SearchRoute from './domains/search/route/search';
export const api = express();

api.use(express.json())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
    .use(express.urlencoded({ extended: true }))
    .use(`${ApiConfig.rootPath}`, healthRoutes.HealthRoutes)
    .use(`${ApiConfig.rootPath}`, SearchRoute)
    .use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (res.headersSent) {
            return next(err);
          }
          res.status(500);
          res.send(err).json({ code: res.statusCode, message: err?.message, payload: err.stack });
    });