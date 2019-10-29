var app = angular.module('app', []);

app.controller('signUpController', ['$scope', function ($scope, $rootscope) {

  $scope.updatePassword = function () {
if($scope.userName && $scope.password && $scope.confirmPassword) {
  if(!$scope.Users) {
    $scope.Users = JSON.parse(localStorage.getItem("Users"));
  }
  let userExist = isUserExist($scope.userName, $scope.Users);
  if(userExist) {
    userExist.pwd = $scope.password;
    try {
      localStorage.setItem("Users", JSON.stringify($scope.Users));
      alert("Password Updated");
    } catch (e) {
      alert("Some Error has occured, Password Not Updated");
    }
  } else {
    alert("User doesn't exist, Please SignUp first");
  }
}
  }
  $scope.checkPassword = function (event) {
    console.log(event);
    $scope.checkMessage = "Please proceed Ahead";
  }

  function isUserExist(userName, Users) {
    let userExist = false;
    Users.forEach(function (user) {
      if (user.mail === userName) {
        userExist = user;
      }
    })
    return userExist;
  }

  try {
    $scope.signUp = function () {
      if ($scope.userName && $scope.password) {
        let user = {"mail": $scope.userName, "pwd": $scope.password};
        if(!$scope.Users) {
          $scope.Users = JSON.parse(localStorage.getItem("Users"));
        }
        if ($scope.Users && isUserExist($scope.userName, $scope.Users)) {
          alert("User already exist, Please Login");
        } else {
          if ($scope.Users) {
            $scope.Users.push(user);
            localStorage.setItem("Users", JSON.stringify($scope.Users));
          } else {
            let totalUsers = [];
            totalUsers.push(user);
            localStorage.setItem("Users", JSON.stringify(totalUsers));
          }
          alert("SignUp successfully");
        }
      }
    }
  } catch (e) {
    alert("Some error has occured");
  }
  $scope.userName = '';
  $scope.password = '';
  $scope.checkMessage = '';
  $scope.confirmPassword = '';
  $scope.Users = '';
  $scope.remember = false;
}]);


