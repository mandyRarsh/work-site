'use strict';

angular.module('Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    
  });
}])

.controller('HomeCtrl', [function() {
    var t = 1
}]);