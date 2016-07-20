'use strict';

const service = require('feathers-mongoose');
const entry = require('./entry-model');
const hooks = require('./hooks');
const filter = require('feathers-query-filters');

module.exports = function() {
  const app = this;

  const options = {
    Model: entry,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/api/entries', service(options));

  // Get our initialize service to that we can bind hooks
  const entryService = app.service('/api/entries');

  // Set up our before hooks
  entryService.before(hooks.before);

  // Set up our after hooks
  entryService.after(hooks.after);
};
