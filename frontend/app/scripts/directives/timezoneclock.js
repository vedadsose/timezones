'use strict';

/**
 * @ngdoc directive
 * @name timezonesApp.directive:TimezoneClock
 * @description
 * # TimezoneClock
 */
angular.module('timezonesApp')
  .directive('timezoneClock', function () {
    return {
      restrict: 'A',
      scope: {
        offset: '='
      },
      link: function postLink(scope, element, attrs) {
        var d = new Date()
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
        var nd = new Date(utc + (3600000*scope.offset))
        element.text([nd.getHours(), nd.getMinutes()].join(':'));
      }
    };
  });
