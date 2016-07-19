'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:NewUserCtrl
 * @description
 * # NewUserCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('NewUserCtrl', function ($rootScope, $scope, $uibModalInstance, User) {

    $scope.me = User.me

    $scope.user = {
      email: '',
      password: '',
      role: 'user'
    }

    $scope.errors = {}

    $scope.create = function() {
      User.create($scope.user).then(function(response){
        $scope.close()
        if($scope.user.role !== 'user' && User.me.role === 'admin') {
          User.update({ _id: response._id, role: $scope.user.role }).then(function() {
            $rootScope.$broadcast('update')
          })
        } else {
          $rootScope.$broadcast('update')
        }
      }, function(errors){
        $scope.errors = errors
      })
    }

    $scope.close = function() {
      $uibModalInstance.close()
    }

  });
