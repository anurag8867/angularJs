var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', ['$scope', function($scope) {
  $scope.message = 'myController';
console.log(document.getElementsByTagName('<head>'));
  $scope.buttt = function () {
    $scope.message = 'Inside buttt function';
  }
}]);

