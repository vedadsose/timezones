'use strict';

const assert = require('assert');
const restrictEditing = require('../../../../src/services/entry/hooks/restrictEditing.js');

describe('entry restrictEditing hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictEditing()(mockHook);

    assert.ok(mockHook.restrictEditing);
  });
});
