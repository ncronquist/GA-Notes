bloggy.controller('NavCtrl', ['$scope', '$rootScope', '$modal', 'AlertService', 'UserService', function($scope, $rootScope, $modal, AlertService, UserService) {

  console.log('nav controller loaded');
  // $scope.taco = "taco value";
  $scope.UserService = UserService;


  $scope.showLogin = function() {
    console.log("Show login button clicked!");
    $modal.open ({
      templateUrl: '/views/auth/loginModal.html',
      controller: 'AuthLoginModalCtrl'
    })
  }

  $scope.logout = function() {
    UserService.logout(function(err, data) {
      // Doing nothing...
    })
  }

  $scope.$watchCollection('UserService', function() {
    $scope.currentUser = UserService.currentUser;
  })

}])
