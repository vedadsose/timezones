'use strict';

// User hooks
const user = require('../user-model');
const errors = require('feathers-errors');
const auth = require('feathers-authentication').hooks;

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

exports.restrictToRole = function(roles) {
  return function(hook) {
    return new Promise(function(resolve, reject) {
      if(hook.params.user && !~roles.indexOf(hook.params.user.role)) {
        reject(new errors.Forbidden);
      }
      resolve()
    })
  }
}

exports.restrictFieldToRole = function(field, roles) {
  return function(hook) {
    return new Promise(function(resolve, reject) {
      if(hook.params.user && !~roles.indexOf(hook.params.user.role) && (typeof hook.data[field] !== 'undefined' || typeof hook.data['$set'][field] !== 'undefined')) {
        reject(new errors.Forbidden);
      }
      resolve()
    })
  }
}
