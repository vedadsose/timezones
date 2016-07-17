'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:NewentryCtrl
 * @description
 * # NewentryCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('NewEntryCtrl', function ($scope, Entry, $uibModalInstance) {

      $scope.disabled = false

      $scope.entry = {
        name: '',
        city: '',
        gmt: 0
      }

      $scope.create = function() {
        $scope.disabled = true
        Entry.create($scope.entry).then(function(){
          $scope.close()
        }, function(error) {
          $scope.disabled = false
        })
      }

      $scope.close = function() {
        $uibModalInstance.close()
      }

  });
