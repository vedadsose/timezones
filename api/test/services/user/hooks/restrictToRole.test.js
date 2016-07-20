'use strict';

const assert = require('assert');
const restrictToRole = require('../../../../src/services/user/hooks/restrictToRole.js');

describe('user restrictToRole hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictToRole()(mockHook);

    assert.ok(mockHook.restrictToRole);
  });
});
