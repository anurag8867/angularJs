var app = angular.module('app', []);

app.controller('loginController', ['$scope', function($scope, $rootscope) {
try {
  $scope.login = function () {
    let Users = JSON.parse(localStorage.getItem("Users"));
    let userFound = false;
    if(Users) {
      Users.forEach(function(user) {
        if($scope.userName === user.mail && $scope.password === user.pwd) {
          alert("Logged in successfully");
          userFound = !userFound;
        }
      });
      if(!userFound) {
        alert("User not found");
      }
    } else {
      alert("User not found");
    }
  }
} catch (e) {
  alert("Some error has occured");
}
  $scope.userName = '';
  $scope.password = '';
  $scope.remember = false;
}]);



