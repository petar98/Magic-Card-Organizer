app.controller('LoginController',['$scope','authenticationService','$location',function ($scope,authenticationService,$location) {
    $scope.login = function () {
        authenticationService.login($scope.user.username, $scope.user.password).then(function () {
            alert("You are logged in!");
        },function (err) {
            console.log(err);
        });
        $scope.username = authenticationService.loggedUsername();
    };
}]);