'use strict';

angular
  .module('timezonesApp')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('dashboard', {
      abstract: true,
      url: '',
      templateUrl: 'views/dashboard/main.html',
      controller: 'DashboardCtrl'
    })
    .state('dashboard.entries', {
      url: '',
      templateUrl: 'views/dashboard/entries.html',
      controller: 'EntriesCtrl',
      authenticate: true
    })
    .state('dashboard.users', {
      url: '/users',
      templateUrl: 'views/dashboard/users.html',
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
    /*.state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ['a'];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });*/
  })
  .run(function($rootScope, $state, User) {
    $rootScope.$on("$stateChangeStart",
      function(event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !User.me) {
          $state.go('login');
          event.preventDefault();
        }
      });
  });
