'use strict';

/**
 * @ngdoc function
 * @name timezonesApp.controller:EntriesCtrl
 * @description
 * # EntriesctrlCtrl
 * Controller of the timezonesApp
 */
angular.module('timezonesApp')
  .controller('EntriesCtrl', function ($rootScope, $scope, $uibModal, $timeout, Entry, $stateParams) {

    $scope.openNewModal = function() {
      $uibModal.open({
        templateUrl: 'views/dashboard/entry_modal.html',
        controller: 'EntryModalCtrl',
        resolve: {
          entry: false,
          owner: function() { return $stateParams.id || false }
        }
      })
    }

    $scope.entries = []
    $scope.loading = false
    $scope.searchTerm = ''
    $scope.params = {
      $skip: 0,
      '$sort[createdAt]': -1
    }

    if($stateParams.id) {
      $scope.params.owner = $stateParams.id
    }

    $scope.loadMore = false

    // Loading
    $scope.loadEntries = function() {
      $scope.loading = true
      var params = {}
      angular.copy($scope.params, params)
      if($scope.searchTerm !== '') {
        params['name[$regex]'] = '(?i)('+$scope.searchTerm+')'
      }
      Entry.get(params).then(function(response){
        angular.forEach(response.data.data, function(entry) {
          $scope.entries.push(entry)
        })

        $scope.params.$skip += response.data.limit
        $scope.loadMore = $scope.params.$skip < response.data.total
        $scope.loading = false
      });
    }

    $scope.loadEntries()

    // Searching
    var doSearch
    $scope.$watch('searchTerm', function(newValue, oldValue){
      $timeout.cancel(doSearch)
      if(newValue !== oldValue) {
        doSearch = $timeout(function(){
          $scope.search()
        }, 800)
      }
    })

    $scope.search = function() {
      $timeout.cancel(doSearch)
      $scope.params.$skip = 0
      $scope.entries = []
      $scope.loadEntries()
    }

    // Deleting
    $scope.delete = function(entry) {
      if(window.confirm('Are you sure you want to delete "'+entry.name+'"?')) {
        Entry.delete(entry).then(function(){
          $scope.entries.splice($scope.entries.indexOf(entry), 1)
        })
      }
    }

    // Edit modal
    $scope.edit = function(entry) {
      $uibModal.open({
        templateUrl: 'views/dashboard/entry_modal.html',
        controller: 'EntryModalCtrl',
        resolve: {
          entry: entry,
          owner: function() { return $stateParams.id || false }
        }
      })
    }

    // Append new entry when added
    $rootScope.$on('newEntry', function() {
      $scope.entries = []
      $scope.params.$skip = 0
      $scope.loadEntries()
    })

    // Update entry
    $rootScope.$on('updateEntry', function(event, updatedEntry) {
      $scope.entries = $scope.entries.map(function(entry) { return entry._id === updatedEntry._id ? updatedEntry : entry })
    })
  });
