module.exports = Object.freeze({
  // route constants
  FEED_ROUTE: '/feed',
  AUTH_ROUTE: '/auth',

  // file operation constants
  IMAGE_PNG: 'image/png',
  IMAGE_JPG: 'image/jpg',
  IMAGE_JPEG: 'image/jpeg',
  IMAGE: 'image',
  IMAGES: '/images',

  // cors operation constants
  OPTIONS: 'OPTIONS',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
  ALLOW_ALL_ORIGINS: '*',

  // Other constants
  FETCHED_POSTS_SUCCESS: 'Fetched posts successfully.',
  VALIDATION_FAILED: 'Validation failed, entered data is incorrect.',
  NO_IMAGE_PROVIDED: 'No image provided.',
  COULD_NOT_FIND_POST: 'Could not find post.',
  NO_FILE_PICKED: 'No file picked.',
  POST_CREATED_SUCCESSFULLY: 'Post created successfully.',
  POST_FETCHED: 'Post fetched.',
  POST_UPDATED: 'Post updated.',
  DELETED_POST: 'Deleted post.',
  USER_CREATED: 'User created!',
  VALID_EMAIL: 'Please enter a valid email.',
  EMAIL_EXISTS: 'E-Mail address already exists!',
  PASSWORD_LENGTH: 'Password must be at least 5 characters long.',
  NAME_REQUIRED: 'Name field is required.',
  USER_NOT_FOUND: 'A user with this email could not be found.',
  WRONG_PASSWORD: 'Wrong password.',
  NOT_AUTHENTICATED: 'Not authenticated.',
  INVALID_TOKEN: 'Invalid token.',
  INTERNAL_SERVER_ERROR: 'Internal server error.',
});
