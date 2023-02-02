import { Request } from 'express';

export interface IParams extends Request {
  id: string;
}
