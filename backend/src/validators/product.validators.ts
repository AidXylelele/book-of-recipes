import * as Joi from "joi";
export interface IValidated {
  value: any;
  error: Error;
}

export const ProductSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  category: Joi.string().min(2).trim().required(),
  amount: Joi.number().required(),
  user_id: Joi.string().required(),
});
