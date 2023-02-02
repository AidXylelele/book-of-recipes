import { NextFunction, Response, Request } from 'express';
import { CustomError } from './error.middleware';

export const responseHandler =
  (fn: Function) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const value = await fn(req, res, next);
      if (!value) {
        throw new CustomError(500, 'Not found');
      }
      res.json(value);
    } catch (e) {
      next(e);
    }
  };
