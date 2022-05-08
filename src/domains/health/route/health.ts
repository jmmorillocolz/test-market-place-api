import { NextFunction, Request, Response, Router } from 'express';

/* eslint-disable-next-line new-cap */
const router = Router();

router.get('/health', async (_req: Request, res: Response, next: NextFunction) => {
    res.send('Api Backend ok');
    next();
});

export default router;
