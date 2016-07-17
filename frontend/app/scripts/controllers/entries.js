'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:EntriesCtrl
 * @description
 * # EntriesctrlCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('EntriesCtrl', function ($scope, $uibModal, Entry) {

    $scope.openNewModal = function() {
      $uibModal.open({
        templateUrl: 'views/dashboard/new_entry.html',
        controller: 'NewEntryCtrl'
      })
    }

    $scope.entries = []
    $scope.offset = 0
    $scope.limit = 10
    $scope.loadMore = true

    $scope.loadEntries = function() {
      Entry.get({offset: $scope.offset, limit: $scope.limit}).then(function(response){
        angular.forEach(response.data.data, function(entry) {
          $scope.entries.push(entry)
        })

        $scope.offset += $scope.limit
        $scope.loadMore = $scope.offset < response.data.total
      });
    }

    $scope.loadEntries()

    // Deleting
    $scope.delete = function(entry) {
      if(confirm('Are you sure you want to delete "'+entry.name+'"?')) {
        Entry.delete(entry).then(function(){
          $scope.entries.splice($scope.entries.indexOf(entry), 1)
        })
      }
    }
  });
