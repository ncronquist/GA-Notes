console.log("Javascript working!");

var moviesApp = angular.module("MoviesApp", [])

moviesApp.controller('SearchController', ['$scope', '$http', function($scope, $http) {
  if (window.localStorage.movie) {
    $scope.searchTerm = JSON.parse(window.localStorage.movie);
  }
  $scope.title = "Movies App";
  $scope.movies = {};

  $scope.search = function() {
    // console.log("Search:", $scope.searchTerm);
    var req = {
      url: "http://www.omdbapi.com",
      params: {
        s: $scope.searchTerm
      }
    }

    $http(req).success(function(data) {
      console.log(data);
      $scope.movies = data;
      console.log($scope.movies.Search);
      window.localStorage.movie = JSON.stringify($scope.searchTerm);
    });
  }

  $scope.showMovie = function(imdbID) {
    console.log("imdbID:", imdbID);
  }

  if ($scope.searchTerm) { $scope.search() };

}])
