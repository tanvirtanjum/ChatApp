var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngFileUpload']);

app.service('AppService', function() {
    this.API_BASE_URL = 'http://localhost:3030/api/';
    this.COOKIE_NAME = 'Credentials';
    this.TITLE = "ChatApp";
});


app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/landing.html',
        controller: 'landing.controller'
    });

    $routeProvider.when('/home', {
        templateUrl: '/views/home.html',
        controller: 'home.controller'
    });

    $routeProvider.otherwise({ 
        redirectTo: './' 
    });
});