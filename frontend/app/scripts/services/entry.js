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
    var route = 'entries'

    this.create = function(entry) {
      return $http.post(config.api+route, entry)
    }

    this.update = function(entry) {
      return $http.put(config.api+route+'/'+entry._id, entry)
    }

    this.get = function(params) {
      return $http({
          url: config.api+route,
          method: 'GET',
          params: params
        });
    }

    this.delete = function(entry) {
      return $http.delete(config.api+route+'/'+entry._id)
    }
  });
