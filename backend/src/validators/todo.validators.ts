import * as Joi from 'joi';
// prettier-ignore

export const TodoSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  data: Joi.string().min(2).trim().required(),
  isDone: Joi.boolean().required(),
  isPrivate: Joi.boolean().required(),
  userId: Joi.string().required()
});
