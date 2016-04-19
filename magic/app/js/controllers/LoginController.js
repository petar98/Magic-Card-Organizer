app.controller('LoginController',['$scope','authenticationService','$location',function ($scope,authenticationService,$location) {
    if(authenticationService.isLogged() === false){
        $location.path('/home');
    }
}]);