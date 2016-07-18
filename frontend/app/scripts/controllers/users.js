'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('UsersCtrl', function ($scope, User) {

    $scope.me = User.me

    User.get().then(function(response) {
      $scope.users = response.data.data
    })

    // Update role
    $scope.update = function(user) {
      User.update(user)
    }

    $scope.delete = function(user) {
      if(confirm('Are you sure you want to delete "'+user.email+'"')) {
        User.delete(user).then(function(){
         $scope.users.splice($scope.users.indexOf(user), 1)
        })
      }
    }

  });
