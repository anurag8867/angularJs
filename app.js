var app = angular.module('anuragApp', ['ngRoute']);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.message = 'HomeController';
console.log(document.getElementsByTagName('<head>'))
// console.log(document.nodeName)
// console.log(document)
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
  $scope.buttt = function () {
    $scope.message = 'Inside buttt function';
  }
}]);

