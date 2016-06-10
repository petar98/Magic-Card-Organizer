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

app.controller('NavigationBarController', ['$kinvey', '$scope', 'authenticationService', '$timeout', function ($kinvey, $scope, authenticationService, $timeout) {

        $scope.isUserLogged = function () {
            var activeUser = $kinvey.getActiveUser();
            if (activeUser != null) {
                return true;
            }
            else {
                return false;
            }
        };


    $scope.username = $kinvey.getActiveUser().username;
}]);
