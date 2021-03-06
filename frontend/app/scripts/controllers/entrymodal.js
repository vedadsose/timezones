'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:EntryModalCtrl
 * @description
 * # EntryModalCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('EntryModalCtrl', function ($rootScope, $scope, Entry, $uibModalInstance, $timeout, $http, entry, owner, Timezone) {
      $scope.disabled = false

      $scope.entry = entry || {
        name: '',
        city: '',
        gmt: 0,
        owner: owner
      }

      $scope.create = function() {
        $scope.disabled = true
        Entry.create($scope.entry).then(function(){
          $scope.close()
          $rootScope.$emit('newEntry')
        }, function() {
          $scope.disabled = false
        })
      }

      $scope.save = function() {
        $scope.disabled = true
        Entry.update($scope.entry).then(function(response){
          $scope.close()
          $rootScope.$emit('updateEntry', response.data)
        }, function() {
          $scope.disabled = false
        })
      }

      $scope.close = function() {
        $uibModalInstance.close()
      }

      $scope.loadingGMT = false
      var timeout
      $scope.$watch('entry.city', function(city, prevCity){
        if($scope.entry.name === prevCity || $scope.entry.name === '') {
          $scope.entry.name = city
        }
        // City to GMT lookup
        if(prevCity !== city) {
          $timeout.cancel(timeout)
          timeout = $timeout(function(){
            if($scope.entry.city === '') {
              $scope.entry.gmt = 0
            } else {
              $scope.loadingGMT = true
              Timezone.determine($scope.entry.city).then(function(gmt) {
                $scope.entry.gmt = gmt
                $scope.loadingGMT = false
              }, function() {
                $scope.loadingGMT = false
              })
            }
          }, 500)
        }
      })

  });
