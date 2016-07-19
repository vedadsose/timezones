'use strict';

describe('Service: timezone', function () {

  // load the service's module
  beforeEach(module('timezonesApp'));

  // instantiate service
  var timezone;
  beforeEach(inject(function (_timezone_) {
    timezone = _timezone_;
  }));

  it('should do something', function () {
    expect(!!timezone).toBe(true);
  });

});
