'use strict';

// src/services/entry/hooks/owner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if(!(hook.params.user.role === 'admin' && hook.data.owner)) {
      hook.data.owner = hook.params.user._id;
    }
  };
};
