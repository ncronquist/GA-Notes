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

myApp.controller('EditTaskModal', ['$scope', '$log', '$modalInstance', 'task', function($scope, $log, $modalInstance, task){

  $log.info('Modal controller loaded.');
  $scope.task = task;

  $scope.save = function() {
    // alert("clicked save");

    $modalInstance.close($scope.task);
  };

  $scope.cancel = function() {
    // alert("clicked cancel");
    $modalInstance.dismiss();
  }


}])

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
      templateUrl: "edit-task-modal.html",
      controller: 'EditTaskModal',
      resolve:{
        task: function() {
          return $scope.tasks[idx]
        }
      }
    }).result.then(function(updatedTask){
      // Modal instance.close; AKA save
      $log.info('User clicked save')
      $scope.tasks[idx] = updatedTask;

    }, function(){
      // Modal insance.dismiss or clicking outside the modal; also esc
      $log.info('User clicked cancel')
    })
  }

  $scope.deleteTask = function(idx) {
    $scope.tasks.splice(idx,1);
  }
}])


