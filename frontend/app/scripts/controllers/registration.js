'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('RegistrationCtrl', function ($scope, User) {

    // User object
    $scope.user = {
      email: '',
      password: ''
    };

    // Error object
    $scope.errors = {}

    // Register
    $scope.create = function() {
      User.create($scope.user).then(function(){
        $scope.errors = {}

      }, function(errors) {
        console.log(errors)
        $scope.errors = errors
      });
    };

  });
