bloggy.controller('HomeCtrl', ['$scope', '$rootScope', 'Post', 'AlertService', 'UserService', function($scope, $rootScope, Post, AlertService, UserService) {
  console.log('home controller loaded!');

  // AlertService.clear();
  // AlertService.add('danger', 'this is an error');
  // AlertService.add('info', 'this is some info');
  // AlertService.add('success', 'this is a success message');
  // console.log(AlertService.get());

  $rootScope.loading = true;

  $scope.posts = [];

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService', function() {
    $scope.currentUser = UserService.currentUser;
  })



  // $http.get('/api/post').success(function(data) {
  //   // console.log(data);
  //   $scope.posts = data;
  // })

  $scope.createPost = function(){
    var post = new Post();
    post.title = "My new post title";
    post.body = "This is my new post body";
    post.$save(function(data){
      console.log(data);

      //refresh post list
      $scope.loadPosts();
    });
  }

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
      AlertService.add('info', 'The post was deleted.');
    })
  }

  $scope.loadPosts = function() {
    Post.query(function(data) {
      $scope.posts = data;
      $rootScope.loading = false;
    })
  }

  // Post.query(function(data) {
  //   $scope.posts = data;
  // })

  $scope.loadPosts();

}])
