'use strict';

/* Controllers */

angular.module('happierTest.controllers', [])

  .config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://d3mix3rw6pguam.cloudfront.net/courses/everyday-grateful/day_assets/day0-sd.mp4',
      'https://d3mix3rw6pguam.cloudfront.net/courses/yoga-to-go/day_assets/day0-sd.mp4',
      'https://d3mix3rw6pguam.cloudfront.net/courses/meditation-vacation/day_assets/day0-sd.mp4'
      ]);
  })
  .controller('videos', ['$scope', '$http', function($scope, $http) {

    $http.get('json/videos.json').
        success(function(data) {
        	$scope.videos = data;
        });

  }]);
