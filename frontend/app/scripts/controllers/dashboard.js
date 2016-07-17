'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('DashboardCtrl', function ($scope, User) {
    $scope.me = User.me
  });
