'use strict';

/**
 * @ngdoc service
 * @name timezonesApp.User
 * @description
 * # User
 * Service in the timezonesApp.
 */
angular.module('timezonesApp')
  .service('User', function ($q, $http, config) {
     var currentUser = false;

      this.create = function(user) {
        return $q(function(resolve, reject) {
          var errors = {}

          // Email validity check
          console.log(user);
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
            this.login().then(function(response) {
              window.location = '/'
            }, function(){
              reject({register: 'We had an issue, please try signing in with your credentials.'});
            });
          }, function(response){
            reject(response.data.data)
          });
        })
      }

      this.login = function(user) {
        return $http.post(config.api+'auth/local', user)
      }

  });
