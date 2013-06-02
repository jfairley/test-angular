var app = angular.module("test-app", ['authModule']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: "views/app.html",
            controller: "AppCtrl",
            resolve: {
                authTest: function(AuthService) {
                    return AuthService.loginTest()
                }
            }
        })
        .when('/login',
        {
            templateUrl: "views/login.html",
            controller: "LoginCtrl",
            resolve: {
                authTest: function(AuthService) {
                    return AuthService.loginTest()
                }
            }
        })
        .otherwise(
        {
            redirectTo: '/'
        })
})