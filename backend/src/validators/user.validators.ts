import Joi from 'joi';
import { RegExps } from '../config/regExps';

export const SignUpSchema = Joi.object({
  email: Joi.string().regex(RegExps.email).trim().required(),
  name: Joi.string().min(2).required(),
  password: Joi.string().regex(RegExps.password).required(),
  avatar: Joi.string().optional().default('https://www.shorturl.at/img/shorturl-icon.png')
});

export const SignInSchema = Joi.object({
  email: Joi.string().regex(RegExps.email).required(),
  password: Joi.string().regex(RegExps.password).required()
});

export const ChangePasswordSchema = Joi.object({
  email: Joi.string().regex(RegExps.email).required(),
  oldPassword: Joi.string().regex(RegExps.password).required(),
  newPassword: Joi.string().regex(RegExps.password).required()
});

export const UpdateUserSchema = Joi.object({
  email: Joi.string().regex(RegExps.email).trim().required(),
  avatar: Joi.string().optional().min(2)
});
