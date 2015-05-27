var bloggy = angular.module('Bloggy', ['ngRoute', 'ngResource', 'ui.bootstrap']);

bloggy.run(function() {
  console.log('Bloggy is up and running');
})

bloggy.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl:'/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'StaticCtrl'
  })
  .when('/404', {
    templateUrl: '/views/404.html',
    controller: 'StaticCtrl'
  })
  .otherwise({redirectTo: '/404'});
}])
