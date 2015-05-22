// ### NOTE ###
// You cannot use a dash (-) in the directive name. Use camel case and then
// convert to using a dash in the html

console.log("Directive Awesome Loaded!");

angular.module('directiveAwesome', [] )
.directive('daTest', function() {
  return {
    // E - element <taco></taco>
    // C - class <ANY class="taco"></ANY>
    // A - attribute <ANY taco></ANY> <ANY taco="steak"></ANY>
    // Can use any or all of these
    restrict: 'E',
    controller: ['$scope', function($scope) {
      console.log('da-test controller loaded');
    }],
    template: '<div class="well" ng-transclude><div ng-transclude></div></div>',
    replace: false,
    transclude: true
    // template is the html that will be put in to the element
    // replace true will replace the original div with the new html
    // transclude will place the original content of the div
  }
})
.directive('daWell', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      console.log('attrs:', attrs);
      element.addClass('well');
    }

  }
})
.directive('daToggle', function() {
  return {
    restrict: 'E',
    scope: { // @ string... = javascript... & function...
      onImageUrl: '@on',
      offImageUrl: '@off',
      state: '=?'
    },
    controller: ['$scope', '$element', function($scope, $element) {

      $scope.$watch('state', function() {
        var whichImage = $scope.state ? $scope.onImageUrl : $scope.offImageUrl
        $element.attr('src', whichImage);
      })

      $scope.toggleState = function() {
        $scope.state = !$scope.state;
        console.log($scope.state);
      }
    }],
    replace: true,
    template: '<img src="" ng-click="toggleState()">'
  }
})
