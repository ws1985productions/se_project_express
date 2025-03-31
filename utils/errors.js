const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND_STATUS = 404;
const CONFLICT = 409;
const SERVER_ERROR_STATUS = 500;
const REQUEST_CREATED = 201;

const ERROR = {
  BAD_REQUEST: "Bad request in data or syntax.",
  BAD_AUTHORIZATION: "Authorization required.",
  BAD_CARD_REMOVAL: "You are not allowed to delete this item.",
  NOT_FOUND: "The request was sent to a non-existent address.",
  USED_EMAIL: "That email was already taken.",
  SERVER_ERROR: "An error has occurred on the server.",
  INVALID_ID_FORMAT: "Invalid ID format.",
  MISSING_OWNER: "Owner ID is missing from the request.",
  MISSING_FIELDS: "Missing required fields: name, weather, imageUrl.",
};

module.exports = {
  BAD_REQUEST_STATUS,
  NOT_FOUND_STATUS,
  SERVER_ERROR_STATUS,
  REQUEST_CREATED,
  UNAUTHORIZED,
  FORBIDDEN,
  CONFLICT,
  ERROR,
};