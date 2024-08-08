import createHttpError from 'http-errors';

function notFoundHandler(_req, res, next) {
  return next(createHttpError(404, 'Route not found'));
}

export { notFoundHandler };
