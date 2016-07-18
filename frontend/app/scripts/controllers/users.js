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

    User.get().then(function(response) {
      $scope.users = response.data.data
    })

  });
