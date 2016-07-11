'use strict';

const service = require('feathers-mongoose');
const entry = require('./entry-model');
const hooks = require('./hooks');

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
  app.use('/entries', service(options));

  // Get our initialize service to that we can bind hooks
  const entryService = app.service('/entries');

  // Set up our before hooks
  entryService.before(hooks.before);

  // Set up our after hooks
  entryService.after(hooks.after);
};
