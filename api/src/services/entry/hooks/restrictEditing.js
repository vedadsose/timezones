'use strict';

// src/services/entry/hooks/restrictEditing.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};
import errors from 'feathers-errors'

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return new Promise(function(resolve, reject) {
      if(hook.params.user.role !== 'admin' && hook.data.owner != hook.params.user._id) {
        reject(new errors.Forbidden)
      } else {
        resolve()
      }
    })
  };
};
