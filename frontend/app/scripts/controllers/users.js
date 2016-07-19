'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('UsersCtrl', function ($rootScope, $scope, User, $uibModal) {

    $scope.me = User.me

    $scope.load = function() {
      User.get({ $limit: 1000 }).then(function(response) {
        $scope.users = response.data.data
      })
    }

    $scope.load()

    $rootScope.$on('update', function() {
      $scope.load()
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

    // Modal for new user
    $scope.newUser = function() {
      $uibModal.open({
        templateUrl: 'views/dashboard/new_user.html',
        controller: 'NewUserCtrl'
      })
    }

  });
