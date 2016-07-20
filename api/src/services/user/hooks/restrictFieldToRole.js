'use strict';

// src/services/user/hooks/restrictFieldToRole.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(field, roles) {
  return function(hook) {
    return new Promise(function(resolve, reject) {
      if(hook.params.user && !~roles.indexOf(hook.params.user.role) && (typeof hook.data[field] !== 'undefined' || typeof hook.data['$set'][field] !== 'undefined')) {
        reject(new errors.Forbidden);
      }
      resolve()
    })
  }
};
