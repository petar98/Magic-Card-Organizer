'use strict';

app.controller('RegisterController',['$scope','authenticationService','$location',function ($scope,authenticationService, $location) {
    $scope.user = {};
    $scope.register = function ($scope.user.passwordRepeat, $scope.user.password) {
        if($scope.user.passwordRepeat != $scope.user.password) {
            alert("Please enter the same password Twice");
        }
        authenticationService.register($scope.user.username, $scope.user.password).then(function () {
            alert("registered!");
            $location.path('/caards');
        },function (err) {
            console.log(err);
        });
    }
}]);