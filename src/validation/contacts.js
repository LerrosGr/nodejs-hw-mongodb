import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required()
    .messages({
      'string.base': 'Phone number should be a string',
      'string.empty': 'Phone number cannot be empty',
      'string.pattern.base':
        'Phone number must contain 10–15 digits and can optionally start with a plus sign (+)',
      'any.required': 'Phone number is required',
    }),
  email: Joi.string().email().message({
    'string.base': 'Email should be a string',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email format is invalid',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavourite must be a boolean (true or false)',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required()
    .messages({
      'string.base': 'contactType should be a string',
      'any.only': 'contactType must be one of: work, home, personal',
      'any.required': 'contactType is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .messages({
      'string.base': 'Phone number should be a string',
      'string.empty': 'Phone number cannot be empty',
      'string.pattern.base':
        'Phone number must contain 10–15 digits and can optionally start with a plus sign (+)',
    }),
  email: Joi.string().email().message({
    'string.base': 'Email should be a string',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email format is invalid',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean (true or false)',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'contactType should be a string',
    'any.only': 'contactType must be one of: work, home, personal',
  }),
})
  .min(1)
  .messages({
    'object.min': 'At least one field must be provided for update',
  });
