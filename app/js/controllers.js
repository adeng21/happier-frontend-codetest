'use strict';

/* Controllers */

angular.module('happierTest.controllers', [])
  .controller('videos', ['$scope', '$http', function($scope, $http) {

    $http.get('json/videos.json').
        success(function(data) {
        	$scope.videos = data;
        });

  }]);
