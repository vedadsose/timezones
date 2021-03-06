'use strict';

angular
  .module('timezonesApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider
    .state('dashboard', {
      abstract: true,
      url: '/',
      templateUrl: 'views/dashboard/main.html',
      controller: 'DashboardCtrl'
    })
    .state('dashboard.entries', {
      url: '',
      templateUrl: 'views/dashboard/entries.html',
      controller: 'EntriesCtrl',
      authenticate: true
    })
    .state('dashboard.filteredentries', {
      url: 'entries/:id',
      templateUrl: 'views/dashboard/entries.html',
      controller: 'EntriesCtrl',
      authenticate: true
    })
    .state('dashboard.users', {
      url: 'users',
      templateUrl: 'views/dashboard/users.html',
      controller: 'UsersCtrl',
      authenticate: true
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      authenticate: false
    })
    .state('logout', {
      controller: function($scope, $state, User) {
        User.logout()
  			$state.go('login')
  		}
    })
    .state('registration', {
      url: '/registration',
      templateUrl: 'views/registration.html',
      controller: 'RegistrationCtrl',
      authenticate: false
    })
    .state('404', {
      url: '/404',
      templateUrl: 'views/404.html',
      authenticate: false
    })
  })
  .run(function($rootScope, $state, User) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState) {
        if (toState.authenticate && !User.me) {
          $state.go('login');
          event.preventDefault();
        }
      });
  });
