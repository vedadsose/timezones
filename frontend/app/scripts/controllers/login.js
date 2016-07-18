'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('LoginCtrl', function ($scope, User, $state) {

    $scope.user = {
      email: '',
      password: ''
    }

    $scope.errors = {}

    $scope.disabled = false

    $scope.login = function() {
      $scope.disabled = true
      User.login($scope.user).then(function(){
        $state.go('dashboard.entries')
      }, function(errors){
        $scope.errors = errors
        $scope.disabled = false
        $scope.$apply()
      })
    };

  });
