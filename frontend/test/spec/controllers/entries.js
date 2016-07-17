'use strict';

describe('Controller: EntriesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('timezonesApp'));

  var EntriesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntriesctrlCtrl = $controller('EntriesctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EntriesctrlCtrl.awesomeThings.length).toBe(3);
  });
});
