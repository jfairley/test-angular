var app = angular.module("test-app", []);

app.config(function ($routeProvider, AuthService) {
    $routeProvider
        .when('/',
        {
            resolve: {
                authTest: AuthService.loginTest()
            }
        })
        .when('/login',
        {
            templateUrl: "login.html",
            controller: "LoginCtrl",
            resolve: {
                authTest: AuthService.loginTest()
            }
        })
        .otherwise(
        {
            redirectTo: '/'
        })
})