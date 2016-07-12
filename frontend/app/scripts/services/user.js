'use strict';

/**
 * @ngdoc service
 * @name timezonesApp.User
 * @description
 * # User
 * Service in the timezonesApp.
 */
angular.module('timezonesApp')
  .service('User', function ($q, $http, config, localStorageService) {
     this.me = localStorageService.get('user');
     this.token = localStorageService.get('token');
     var service = this;

     // Registration
    this.create = function(user) {
      return $q(function(resolve, reject) {
        var errors = {}

        // Email validity check
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(user.email)) errors.email = 'Email is not valid';

        // Password strength check
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
        if(!passwordRegex.test(user.password)) errors.password = 'Password should have at least 8 characters and contain at least one number and letter';

        // Return errors
        if(Object.keys(errors).length > 0) {
          reject(errors)
          return
        }

        // Create account
        $http.post(config.api+'users', user).then(function(){
          service.login(user).then(function(response) {
            resolve()
          }, function(){
            reject({register: 'We had an issue, please try signing in with your credentials.'});
          });
        }, function(response){
          reject(response.data.data)
        });
      })
    }

    this.login = function(user) {
      return new Promise(function(resolve, reject){
        $http.post(config.api+'auth/local', user).then(function(response){
          service.me = response.data.data
          localStorageService.set('user', service.me)
          service.token = response.data.token
          localStorageService.set('token', service.token)
          resolve()
        }, function(response) {
          reject(response.data)
        })
      });
    }

  });
