'use strict';
var initialized = false;
var app = angular.module('app', ['ngRoute', 'kinvey']);
    app.config(function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html'
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

app.run(['$kinvey', '$rootScope', '$location', 'kinveyConfig', function($kinvey, $rootScope, $location, kinveyConfig) {
    $rootScope.$on('$locationChangeStart', function(event) {
        if (!initialized) {
            event.preventDefault();
            $kinvey.init(kinveyConfig).then(function() {
                initialized = true;
                console.log("Connected to Kinvey!");
            }, function(err) {
                console.log("Error connection to Kinvey");
            });
        }
    });
}]);

