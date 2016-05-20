'use strict';

app.controller('NavigationBarController', function($scope, authenticationService, $location) {
    $scope.authenticationService = authenticationService;
    $scope.logout = function() {
        authenticationService.logout();
        $location.path("#/home");
    }
})