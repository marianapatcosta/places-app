const constants: Readonly<any> = Object.freeze({
  AUTHENTICATION_ERROR: 'Username and/or password are not correct.',
  EXISTING_USER_ERROR: 'This username already exists.',
  GENERAL_ERROR: 'An unknown error occurred.',
  MIME_TYPE_ERROR: 'Invalid mime type.',
  NONEXISTING_PLACE_ERROR: 'There is no place with the provided place id.',
  ROUTE_NOT_FOUND_ERROR: 'Could not find this route',
});

export default constants;
