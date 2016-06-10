'use strict';
var initialized = false;
var app = angular.module('app', ['ngRoute', 'kinvey']);
app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'templates/home.html'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.when('/cards', {
        templateUrl: 'templates/cards.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
});

app.constant('kinveyConfig', {
    appKey: 'kid_-JRv7Kx1lb',
    appSecret: '5875e9271ab944849188b751ba260675'
});

//app.run(['$kinvey', '$rootScope', '$location', 'kinveyConfig', function ($kinvey, $rootScope, $location) {
//    $rootScope.$on('$locationChangeStart', function(event) {
//        if (!initialized) {
//            event.preventDefault();
//            $kinvey.init(kinveyConfig).then(function() {
//                initialized = true;
//                console.log("Connected to Kinvey!");
//            }, function(err) {
//                console.log("Error connection to Kinvey");
//            });
//        }
//    });
//
//    //var promise = $kinvey.init({
//    //    appKey: 'kid_-JRv7Kx1lb',
//    //    appSecret: '5875e9271ab944849188b751ba260675'
//    //});
//    //promise.then(function () {
//    //    initialized = true;
//    //    console.log("Kinvey init with success");
//    //}, function (errorCallback) {
//    //    console.log("Kinvey init with error: " + JSON.stringify(errorCallback));
//    //});
//}]);

app.run(['$kinvey', '$rootScope', '$location', 'kinveyConfig', '$timeout', function ($kinvey, $rootScope, $location, kinveyConfig, $timeout) {

        if (!initialized) {
            $kinvey.init(kinveyConfig).then(function () {
                initialized = true;
                console.log('Connected to Kinvey')
            }, function (err) {
                console.error('Error' + err);
            });
        }
}]);




