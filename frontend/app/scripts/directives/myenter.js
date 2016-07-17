'use strict';

/**
 * @ngdoc directive
 * @name timezonesApp.directive:myEnter
 * @description
 * # myEnter
 */
angular.module('timezonesApp')
  .directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
