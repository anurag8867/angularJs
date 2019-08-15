var app = angular.module('anuragApp', ['ngRoute']);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.message = 'HomeController';

  $scope.buttt = function () {
    $scope.message = 'Inside buttt function';
  }
}]);

