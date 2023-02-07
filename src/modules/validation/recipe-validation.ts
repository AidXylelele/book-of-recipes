import * as Joi from "joi";

export const recipeSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  products: Joi.array()
    .items({
      category: Joi.string().min(2).trim().required(),
      title: Joi.string().min(2).trim().required(),
      amount: Joi.number().required(),
    })
    .min(1)
    .required(),
  videoLink: Joi.string().min(2).trim().required(),
  photoLink: Joi.string().min(2).trim().required(),
  description: Joi.string().min(2).trim().required(),
  isPublic: Joi.boolean().required(),
});
