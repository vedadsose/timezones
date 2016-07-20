'use strict';

// src/services/user/hooks/restrictToRole.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  let roles = options
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return new Promise(function(resolve, reject) {
      if(hook.params.user && !~roles.indexOf(hook.params.user.role)) {
        reject(new errors.Forbidden);
      }
      resolve()
    })
  }
};
