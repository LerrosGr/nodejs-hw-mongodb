import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(/^\+?[0-9]{10,15}$/),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
}).min(1);
