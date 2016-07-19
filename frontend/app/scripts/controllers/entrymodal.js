'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:EntryModalCtrl
 * @description
 * # EntryModalCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('EntryModalCtrl', function ($rootScope, $scope, Entry, $uibModalInstance, $timeout, $http, entry) {

      $scope.disabled = false

      $scope.entry = entry || {
        name: '',
        city: '',
        gmt: 0
      }

      $scope.create = function() {
        $scope.disabled = true
        Entry.create($scope.entry).then(function(){
          $scope.close()
          $rootScope.$emit('newEntry')
        }, function(error) {
          $scope.disabled = false
        })
      }

      $scope.save = function() {
        $scope.disabled = true
        Entry.update($scope.entry).then(function(){
          $scope.close()
          $rootScope.$emit('updateEntry', $scope.entry)
        }, function(error) {
          $scope.disabled = false
        })
      }

      $scope.close = function() {
        $uibModalInstance.close()
      }

      $scope.$watch('entry.city', function(city, prevCity){
        if($scope.entry.name === prevCity || $scope.entry.name === '') {
          $scope.entry.name = city
        }
      })

      $scope.loadingGMT = false
      var timeout
      $scope.$watch('entry.city', function() {
        $timeout.cancel(timeout)
        timeout = $timeout(function(){
          if($scope.entry.city === '') $scope.entry.gmt = 0
          else {
            $scope.loadingGMT = true
            $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+$scope.entry.city).then(function(response){
              if(response.data.results.length > 0) {
                var location = response.data.results[0].geometry.location
                $http.get('https://maps.googleapis.com/maps/api/timezone/json?location='+[location.lat, location.lng].join(',')+'&timestamp=1331161200&sensor=false').then(function(response){
                  console.log(response)
                  $scope.entry.gmt = response.data.rawOffset/3600+1
                  $scope.loadingGMT = false
                })
              } else {
                $scope.loadingGMT = false
              }
            })
          }
        }, 500)
      })

  });
