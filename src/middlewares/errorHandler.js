import { isHttpError } from 'http-errors';

function errorHandler(err, _req, res, next) {
  if (isHttpError(err) === true) {
    return res
      .status(err.status)
      .send({ status: err.status, message: err.message });
  }
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err,
  });
}

export { errorHandler };
