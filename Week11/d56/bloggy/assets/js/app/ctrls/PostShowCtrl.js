bloggy.controller('PostShowCtrl', [
  '$scope',
  '$rootScope',
  '$routeParams',
  'Post',
  'PostComment',
  'AlertService',
  'UserService',
  function(
    $scope,
    $rootScope,
    $routeParams,
    Post,
    PostComment,
    AlertService,
    UserService) {

  console.log('Post Show Controller Loaded');

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService', function() {
    $scope.currentUser = UserService.currentUser;
  })

  Post.get({id:$routeParams.id}, function(data) {
    $scope.post = data;
  })

  $scope.addComment = function() {
    console.log('Add a comment:', $scope.commentText);
    var comment = new PostComment();
    comment.body = $scope.commentText;
    comment.$save({postId: $scope.post.id}, function(data) {
      // alert("Comment added!")
      console.log(data);
      $scope.post = data;
      $scope.commentText = '';
    })
  }

}])
