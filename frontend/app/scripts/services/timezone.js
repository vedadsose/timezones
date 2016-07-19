'use strict';

/**
 * @ngdoc service
 * @name timezonesApp.timezone
 * @description
 * # timezone
 * Service in the timezonesApp.
 */
angular.module('timezonesApp')
  .service('Timezone', function ($q, $http) {

    this.determine = function(city) {
      return $q(function(resolve, reject) {
        $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+city).then(function(response){
          if(response.data.results.length > 0) {
            var location = response.data.results[0].geometry.location
            $http.get('https://maps.googleapis.com/maps/api/timezone/json?location='+[location.lat, location.lng].join(',')+'&timestamp=1331161200&sensor=false').then(function(response){
              resolve(response.data.rawOffset/3600+1)
            }, function() {
              reject()
            })
          } else {
            reject()
          }
        }, function() {
          reject()
        })
      })
    }

  });
