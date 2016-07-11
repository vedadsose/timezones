'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('entry service', function() {
  it('registered the entries service', () => {
    assert.ok(app.service('entries'));
  });
});
