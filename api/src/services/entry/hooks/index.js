'use strict';


const restrictEditing = require('./restrictEditing');


const populateImage = require('./populateImage');


const ownerfilter = require('./ownerfilter');

const owner = require('./owner');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [ownerfilter()],
  get: [],
  create: [owner(), populateImage()],
  update: [populateImage(), restrictEditing()],
  patch: [populateImage(), restrictEditing()],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
