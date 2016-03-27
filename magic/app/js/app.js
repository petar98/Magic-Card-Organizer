'use strict';

var app = angular.module('app', ['ngResource','ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
        });
        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'MainController'
        });
        $routeProvider.when('register', {
            templateUrl: 'templates/register.html',
            controller: 'RegistrationController'
        });
        $routeProvider.otherwise( {
            redirectTo: '/home'
        })
    });
