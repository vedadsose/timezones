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
        var updateText = function() {
          var d = new Date()
          var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
          var nd = new Date(utc + (3600000*scope.offset))
          var hours = nd.getHours()
          var minutes = nd.getMinutes()
          hours = hours < 10 ? '0'+hours : hours
          minutes = minutes < 10 ? '0'+minutes : minutes
          element.text([hours, minutes].join(':'));

          setTimeout(updateText, 3000)
        }

        updateText()
      }
    };
  });
