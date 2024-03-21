const cors = require('cors');
const helmet = require('helmet');
const crypto = require('crypto');
const env = require('dotenv').config().parsed;
const shared = require('../shared/shared.index');
const { AppError } = shared.models;
const { OPTIONS, GET, POST, PUT, PATCH, DELETE, 
CONTENT_TYPE, AUTHORIZATION, ALLOW_ALL_ORIGINS } = shared.constants;

const apiKey = env.API_KEY;
const secret = env.JWT_SECRET;

const guardApiKey = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (!key || key !== apiKey) {
    const err = new AppError("API Key Required", "UNAUTHORIZED", "guardApiKey");
    return next(err);
  }
  return next();
};

const hashCredentials = (req, res, next) => {
  const credentials = req.body;
  if(!credentials || !credentials.password) return next();
  credentials.password = hash(credentials.password, secret);
  next();
};

const hash = (password, secret) => {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(password);
  return hmac.digest('hex');
};

const useSecurity = (app) => {
  app.use(cors(
    {
      origin: ALLOW_ALL_ORIGINS,
      methods: [
        OPTIONS, GET,
        POST, PUT,
        PATCH, DELETE,
      ],
      allowedHeaders: [
        CONTENT_TYPE,
        AUTHORIZATION,
      ],
    }
  ));
  app.use(helmet());
  app.use(guardApiKey);
};

/**
 * Not user related security middleware function.
 * @description General protection and API Key guards
 */
module.exports = security = {
  /**
   * CORS, attack protection and guard routes that require a valid API Key.
   */
  useSecurity,
  /**
   * Middleware specialized to hash the credentials form the body of the request.
   * @description Hashes the password in present at the body content.
   */
  hashCredentials,
};

