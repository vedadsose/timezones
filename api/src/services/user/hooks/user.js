'use strict';

// User hooks
const user = require('../user-model');
const errors = require('feathers-errors');

exports.checkEmail = function() {
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
}

exports.restrictRole = function() {
  return function(hook) {
    return new Promise(function(resolve, reject) {
      resolve()
    })
  }
}
