'use strict';

const assert = require('assert');
const ownerfilter = require('../../../../src/services/entry/hooks/ownerfilter.js');

describe('entry ownerfilter hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    ownerfilter()(mockHook);

    assert.ok(mockHook.ownerfilter);
  });
});
