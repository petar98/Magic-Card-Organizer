'use strict';

app.controller('LogoutController', ['$scope', 'authenticationService', '$location', function($scope, authenticationService, $location) {
    $scope.logout = authenticationService.logout();
}]);