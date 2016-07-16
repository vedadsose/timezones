'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('RegistrationCtrl', function ($scope, $state, User) {

    // User object
    $scope.user = {
      email: '',
      password: ''
    };

    // Error object
    $scope.errors = {}

    // Register
    $scope.create = function() {
      $scope.btnDisabled = true
      User.create($scope.user).then(function(){
        $scope.errors = {}
        $state.go('dashboard')
      }, function(errors) {
        $scope.errors = errors
        $scope.btnDisabled = false
      });
    };

  });
