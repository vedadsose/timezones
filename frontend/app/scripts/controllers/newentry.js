'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:NewentryCtrl
 * @description
 * # NewentryCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('NewEntryCtrl', function ($scope, Entry) {

      $scope.entry = {
        name: '',
        city: '',
        gmt: 0
      }

      $scope.create = function() {
        Entry.create($scope.entry)
      }

  });
