'use strict';

angular
  .module('timezonesApp')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html'
    })
    .state('registration', {
      url: '/registration',
      templateUrl: 'views/registration.html',
      controller: 'RegistrationCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'views/404.html'
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
  });
