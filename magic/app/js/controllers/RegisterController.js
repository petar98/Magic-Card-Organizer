'use strict';

app.controller('RegisterController', ['$scope', 'authenticationService', '$location', function ($scope, authenticationService, $location) {
    $scope.user = {};
    $scope.register = function () {
        authenticationService.register($scope.user.username, $scope.user.password).then(function () {
            alert("registered!");
            $location.path('#/cards');
        }, function (err) {
            console.log(err);
        });
    }
}]);

