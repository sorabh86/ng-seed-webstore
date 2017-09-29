'use strict';

// Declare app level module which depends on views, and components
angular.module('webStore', [
  'ngRoute',
  'webStore.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
