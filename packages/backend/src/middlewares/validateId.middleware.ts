import { NextFunction, Request, Response } from 'express';
import { CustomError } from './error.middleware';

const { ObjectId } = require('mongoose').Types;

export const validateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | NextFunction> => {
  const { id } = req.params;
  const validated = ObjectId.isValid(id);
  if (validated) return next();
  throw new CustomError(400, 'ID is not valid');
};
