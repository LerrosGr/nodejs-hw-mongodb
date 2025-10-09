import createHttpError from 'http-errors';

export const validateBody = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (validateError) {
      const error = createHttpError(400, validateError.message);
      next(error);
    }
  };
};
