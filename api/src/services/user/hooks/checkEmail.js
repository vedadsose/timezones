'use strict';

// src/services/user/hooks/checkEmail.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return new Promise(function(resolve, reject) {
      user.find({ email: hook.data.email }, function(err, users) {
        if(users.length > 0) {
          reject(new errors.BadRequest({email: 'Email is already taken'}));
        } else {
          resolve()
        }
      });
    });
  }
};
