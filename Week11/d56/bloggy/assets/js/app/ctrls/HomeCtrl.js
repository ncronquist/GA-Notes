bloggy.controller('HomeCtrl', ['$scope', '$resource', function($scope, $resource) {
  console.log('home controller loaded!');

  var Post = $resource('/api/post/:id');

  $scope.posts = [];



  // $http.get('/api/post').success(function(data) {
  //   // console.log(data);
  //   $scope.posts = data;
  // })

  $scope.showPost = function(postId) {
    Post.get({id:postId}, function(data) {
      console.log(data);
    })
  }

  $scope.deletePost = function(postId) {
    // alert("This would delete: ", postId)
    Post.delete({id:postId}, function(data) {
      console.log(data);
      $scope.loadPosts();
    })
  }

  $scope.loadPosts = function() {
    Post.query(function(data) {
      $scope.posts = data;
    })
  }

  Post.query(function(data) {
    $scope.posts = data;
  })

}])
