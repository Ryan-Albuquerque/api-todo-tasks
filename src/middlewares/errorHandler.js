function errorHandler(err, req, res, next) {
  console.log(`${err.message}\n${err.stack}`);

  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ message: err.message, stack: err.stack });
}

module.exports = errorHandler;