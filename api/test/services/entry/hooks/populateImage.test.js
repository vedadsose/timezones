'use strict';

const assert = require('assert');
const populateImage = require('../../../../src/services/entry/hooks/populateImage.js');

describe('entry populateImage hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    populateImage()(mockHook);

    assert.ok(mockHook.populateImage);
  });
});
