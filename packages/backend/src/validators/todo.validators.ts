import * as Joi from 'joi';
// prettier-ignore
export interface IValidated {
  value: any;
  error: Error;
}

export const TodoSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  data: Joi.string().min(2).trim().required(),
  isDone: Joi.boolean().required(),
  isPrivate: Joi.boolean().required()
});
