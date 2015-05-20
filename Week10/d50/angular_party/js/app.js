console.log('Loaded!');

// This is how you create a new angular app
// The empty array is where you would load modules
var myApp = angular.module('TacoApp', ['ui.bootstrap']);

// Run is a promise that happens after the app is up and running
// There is another one called configure that happens before the app is up
myApp.run(function() {
  console.log('angular app started!');
})

var panelCount = 0;

myApp.controller('LeftPanel', ['$scope', '$log', function($scope, $log) {
  console.log("Left panel running");
  $scope.taco = "yummy";
  $scope.count = 0;
  $scope.happy = false;
  $scope.toggleHappiness = function() {
    $scope.happy = !$scope.happy;
  }
}]);

myApp.controller('Todo', ['$scope', '$log', '$modal', function($scope, $log, $modal){
  $scope.tasks = ['build todo list', 'add stuff', 'profit'];

  $scope.addTask = function() {
    $log.info('added a task');
    $scope.tasks.push($scope.newTask);
    $scope.newTask = "";
  }

  $scope.editTask = function(idx) {
    console.log($scope.tasks[idx]);

    $modal.open({
      // template: 'HI THERE!!!'
      // template URL is based on the root of the web server
      templateUrl: "edit-task-modal.html"
    })
  }

  $scope.deleteTask = function(idx) {
    $scope.tasks.splice(idx,1);
  }
}])


