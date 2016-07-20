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

    $scope.loadMore = false
    $scope.me = User.me
    $scope.params = {
      $limit: 15,
      $skip: 0
    }

    $scope.users = []

    $scope.loadUsers = function() {
      User.get($scope.params).then(function(response) {
        angular.forEach(response.data.data, function(user) {
          $scope.users.push(user)
        })
        $scope.params.$skip += $scope.params.$limit
        $scope.loadMore = $scope.params.$skip < response.data.total
      })
    }

    $scope.loadUsers()

    $rootScope.$on('update', function() {
      $scope.loadUsers()
    })

    // Update role
    $scope.update = function(user) {
      User.update(user)
    }

    $scope.delete = function(user) {
      if(window.confirm('Are you sure you want to delete "'+user.email+'"')) {
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
