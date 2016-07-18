'use strict';

// src/services/entry/hooks/ownerfilter.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    // Ordinary user can only see his entres
    if(typeof hook.params.query.owner !== 'undefined' && hook.params.user.role !== 'admin') {
    // if(hook.params.user.role === 'user' || typeof hook.params.query.owner === 'undefined') {
      hook.params.query.owner = hook.params.user._id
    }

    hook.ownerfilter = true;
  };
};
