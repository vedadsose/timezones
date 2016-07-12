'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('LoginCtrl', function ($scope, User) {

    $scope.user = {
      email: '',
      password: ''
    }

    $scope.errors = {}

    $scope.login = function() {
      User.login($scope.user).then(function(){
        // Desi se nesto
      }, function(response){
        $scope.errors.login = 'Can\'t find a user with this email address'
      })
    };

  });
