bloggy.factory('PostComment', ['$resource', function($resource) {

  return $resource('/api/post/:postId/comments/:id', null, {
    'update': { method: 'PUT' }});

  // return $resource('/api/post/:id');
}])

// PostComment.get({postId:34322353,id:753543534})
