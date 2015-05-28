bloggy.controller('AuthLoginModalCtrl', ['$scope', '$mdDialog', 'UserService', function($scope, $mdDialog, UserService) {

  console.log('Login modal controller!');

  // $scope.login = function() {
  //   // alert('You tried to login' + $scope.email + ' ' + $scope.password)
  //   // console.log(UserService);

  //   UserService.login($scope.email, $scope.password, function(err, data) {
  //     if (err) {
  //       alert('something horrible happened!');
  //     } else if (data && data.result) {
  //       // logged in
  //       $modalInstance.close();
  //     } else {
  //       // not logged in
  //       console.log(data);
  //       alert('unable to log in');
  //     }
  //   });

  // }

  $scope.login = function() {
    // console.log("Hit Login");
    // alert('You tried to login for email: ' + $scope.email + ' and password: ', + $scope.password);

    UserService.login($scope.email, $scope.password, function(err, data) {
      if (err) {
        alert('something horrible happened!');
      } else if (data && data.result) {
        // logged in
        // $modalInstance.close();
        $mdDialog.hide();
      } else {
        // not logged in
        console.log(data);
        alert('unable to log in');
      }
    });

  }

  // $scope.hide = function() {
  //   $mdDialog.hide();
  // };
  // $scope.cancel = function() {
  //   $mdDialog.cancel();
  // };
  // $scope.answer = function(answer) {
  //   $mdDialog.hide(answer);
  // };

}])


