bloggy.controller('NavCtrl', ['$scope', '$rootScope', '$mdDialog', 'AlertService', 'UserService', function($scope, $rootScope, $mdDialog, AlertService, UserService) {

  console.log('nav controller loaded');
  // $scope.taco = "taco value";
  $scope.UserService = UserService;


  $scope.showLogin = function(ev) {
    console.log("Show login button clicked!");
    console.log("Event:", ev);
    // $modal.open ({
    //   templateUrl: '/views/auth/loginModal.html',
    //   controller: 'AuthLoginModalCtrl'
    // })
    // $('#modal1').openModal();
    $mdDialog.show({
      controller: 'AuthLoginModalCtrl',
      templateUrl: '/views/auth/loginModal.html',
      clickOutsideToClose: true,
      escapeToClose: true,
      targetEvent: ev
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
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
