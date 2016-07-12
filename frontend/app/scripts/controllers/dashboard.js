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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.me = User.me
  });
