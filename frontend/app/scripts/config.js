'use strict';

angular
  .module('timezonesApp')
  .constant('config', {
    api: '/api/'
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(['$q', '$injector',
    function($q, $injector){
      return {
        'request': function(config){
          var User = $injector.get('User');

          config.headers = config.headers || {};

          if(User.token && config.url.indexOf('googleapis') < 0){
            config.headers.Authorization = 'Bearer ' + User.token;
          }
          return config;
        },
        'responseError': function(response){
          switch(response.status){
            case 401:
            case 403:
            case 500:
            case 502:
            case 503:
              // window.location.href = '500.html';
              break;
          }
          return $q.reject(response);
        }
      };
    }]);
  });
