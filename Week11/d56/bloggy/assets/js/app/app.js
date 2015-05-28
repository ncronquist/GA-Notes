var bloggy = angular.module('Bloggy', ['ngRoute', 'ngResource', 'ngMaterial']);

bloggy.run(['$rootScope', 'AlertService', 'UserService', function($rootScope, AlertService, UserService) {
  console.log('Bloggy is up and running');

  UserService.check(function(err, data) {
    console.log('Check', err, data);
  })

  // This assigns an event listener to the root scope for route changed and clears the alert
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    console.log('change', event, next, current);
    AlertService.clear();
  });
}])

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
  .when('/post/:id', {
    templateUrl: '/views/post/show.html',
    controller: 'PostShowCtrl'
  })
  .when('/404', {
    templateUrl: '/views/404.html',
    controller: 'StaticCtrl'
  })
  .otherwise({redirectTo: '/404'});
}])
