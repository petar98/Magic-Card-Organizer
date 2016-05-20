'use strict';

//app.controller('NavigationBarController', function ($scope, authenticationService, $location) {
//    if (authenticationService.isLogged() === true) {
//        $scope.isUserLogged = true;
//        $scope.logout = function () {
//            authenticationService.logout();
//            $location.path("#/home");
//        }
//    }
//});

app.controller('NavigationBarController', ['$kinvey', '$scope', 'authenticationService', '$location', function ($kinvey, $scope, authenticationService) {


    $scope.isUserLogged = function() {
        if(authenticationService.isLogged()) {
            return true;
        }
        else {
            return false;
        }
    };
}]);
