var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      })
      .when('/login', {
        templateUrl: 'login.html'
      })
      .when('/signUp', {
        templateUrl: 'signUp.html'
      });
});

app.controller('controller', function ($scope) {
  $scope.message = "Hello world";
  $scope.signUp = function () {
    console.log($scope.userName);
    console.log($scope.password);
  };
  $scope.userName = '';
  $scope.password = '';
});
