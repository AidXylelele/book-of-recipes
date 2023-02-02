import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { CustomError } from './error.middleware';

export const validateBody =
  <T extends Joi.ObjectSchema>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new CustomError(400, 'Invalid input!');
    }
    return next();
  };
