app.controller('LoginController', ['$kinvey', '$scope', 'authenticationService', '$location', function ($kinvey, $scope, authenticationService, $location) {
    if (authenticationService.isLogged() === false) {
        $scope.login = function () {
            authenticationService.login($scope.user.username, $scope.user.password).then(function () {
                alert("You are successfully logged in!");
                $location.path("#/cards");
            }, function (err) {
                console.log(err);
            });
        };
    }
    else {
        $location.path("#/home");
        alert("You are already logged in!");
        $scope.hideLogin = true;
    };
}]);
