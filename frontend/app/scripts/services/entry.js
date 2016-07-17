'use strict';

/**
 * @ngdoc service
 * @name timezonesApp.Entry
 * @description
 * # Entry
 * Service in the timezonesApp.
 */
angular.module('timezonesApp')
  .service('Entry', function (config, $http) {
    var route = 'entry'
    this.create = function(entry) {
      return $http.post([config.api, route].join('/'), entry)
    }
  });
