'use strict';

const assert = require('assert');
const owner = require('../../../../src/services/entry/hooks/owner.js');

describe('entry owner hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    owner()(mockHook);

    assert.ok(mockHook.owner);
  });
});
