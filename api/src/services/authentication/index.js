'use strict';

const authentication = require('feathers-authentication');


module.exports = function() {
  const app = this;

  let config = app.get('auth');
  config.localEndpoint = '/api/auth/local'
  config.userEndpoint = '/api/users'
  app.configure(authentication(config));
};
