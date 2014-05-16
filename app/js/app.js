'use strict';


// Declare app level module which depends on filters, and services
angular.module('happierTest', [
  'ngRoute',
  'happierTest.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/videos', {templateUrl: 'partials/videos.html', controller: 'videos'});
  $routeProvider.otherwise({redirectTo: '/videos'});
}]);
