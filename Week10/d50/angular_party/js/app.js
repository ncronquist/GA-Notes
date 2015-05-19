console.log('Loaded!');

// This is how you create a new angular app
// The empty array is where you would load modules
var myApp = angular.module('TacoApp', []);

// Run is a promise that happens after the app is up and running
// There is another one called configure that happens before the app is up
myApp.run(function() {
  console.log('angular app started!');
})

var panelCount = 0;

myApp.controller('LeftPanel', ['$scope',function($scope) {
  console.log("Left panel running");
  $scope.taco = "yummy";
  $scope.count = 0;
  $scope.happy = false;
  $scope.toggleHappiness = function() {
    $scope.happy = !$scope.happy;
  }
}]);

myApp.controller('Todo', ['$scope',function($scope){
  $scope.tasks = ['build todo list', 'add stuff', 'profit'];

  $scope.addTask = function() {
    $scope.tasks.push($scope.newTask);
    $scope.newTask = "";
  }

  $scope.deleteTask = function(idx) {
    $scope.tasks.splice(idx,1);
  }
}])


