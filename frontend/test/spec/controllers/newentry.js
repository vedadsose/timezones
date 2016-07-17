'use strict';

describe('Controller: NewentryCtrl', function () {

  // load the controller's module
  beforeEach(module('timezonesApp'));

  var NewentryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewentryCtrl = $controller('NewentryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewentryCtrl.awesomeThings.length).toBe(3);
  });
});
