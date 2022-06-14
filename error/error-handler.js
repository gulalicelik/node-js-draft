var BaseError = require("./base-error");
var logger = require("../config/log4");

function logError(err) {
  logger.error(err);
}

function logWarn(warn) {
  logger.warn(warn);
}

function logInfo(info) {
  logger.info(info);
}

function logErrorMiddleware(err, req, res, next) {
  logError(err);
  next(err);
}

function returnError(err, req, res, next) {
  res.status(err.statusCode || 500).send(err.message);
}

function isOperationalError(error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

module.exports = {
  logError,
  logErrorMiddleware,
  returnError,
  logInfo,
  logWarn,
  isOperationalError
};
