import { NextFunction, Request, Response } from 'express';
import { CustomError } from './error.middleware';

export const checkExistance =
  <T>(field: string, service: (id: string) => Promise<T | null>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { body } = req;
      const { params } = req;
      const param = body[field] || params[field];
      const todo = await service(param);
      if (todo) {
        return next();
      }
      throw new CustomError(404, 'Not found');
    } catch (e) {
      next(e);
    }
  };
