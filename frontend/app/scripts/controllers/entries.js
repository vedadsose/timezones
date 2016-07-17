'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:EntriesCtrl
 * @description
 * # EntriesctrlCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('EntriesCtrl', function ($scope, $uibModal) {

    $scope.openNewModal = function() {
      $uibModal.open({
        templateUrl: 'views/dashboard/new_entry.html',
        controller: 'NewEntryCtrl'
      })
    }

  });
