var routingApp = angular.module('RoutingApp', ['ngRoute']);

routingApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller: 'HomeController'
    })
    .when('/contact', {
      templateUrl: '/contact.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: '/about.html',
      controller: 'HomeController'
    })
    .when('/profile/:name', {
      templateUrl: '/profile.html',
      controller: 'ProfileController'
    })
    .otherwise({
      redirectTo: '/'
    })

    $locationProvider.hashPrefix('!');
}])

routingApp.controller('ProfileController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.name = $routeParams.name
}])

routingApp.controller('HomeController', ['$scope', '$location', function($scope, $location) {
  $scope.message = "Home Page"
  console.log($location.path());

  $scope.showProfile = function() {
    $location.path('/profile/' + $scope.name)
  }

}])
