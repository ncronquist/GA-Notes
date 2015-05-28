bloggy.controller('AuthLoginModalCtrl', ['$scope', '$modalInstance', 'UserService', function($scope, $modalInstance, UserService) {

  console.log('Login modal controller!');

  $scope.login = function() {
    // alert('You tried to login' + $scope.email + ' ' + $scope.password)
    // console.log(UserService);

    UserService.login($scope.email, $scope.password, function(err, data) {
      if (err) {
        alert('something horrible happened!');
      } else if (data && data.result) {
        // logged in
        $modalInstance.close();
      } else {
        // not logged in
        console.log(data);
        alert('unable to log in');
      }
    });

  }

}])
