import { NextFunction, Request, Response } from 'express';
import { CustomError } from './error.middleware';

export const checkExistance =
  <T>(service: (id: string) => Promise<T | null>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const todo = await service(id);
      if (todo) {
        return next();
      }
      throw new CustomError(404, 'Not found');
    } catch (e) {
      next(e);
    }
  };
