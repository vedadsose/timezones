'use strict';

const assert = require('assert');
const checkEmail = require('../../../../src/services/user/hooks/checkEmail.js');

describe('user checkEmail hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    checkEmail()(mockHook);

    assert.ok(mockHook.checkEmail);
  });
});
