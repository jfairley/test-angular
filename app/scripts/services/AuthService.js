var authModule = angular.module('authModule', []);

var AuthService = authModule.service("AuthService", function($q, $http) {
    this.sesssionKey = null;

    this.loginTest = function() {
        $http({
            url: "http://10.0.1.4:8080/reachengine/security/login",
            method: "GET",
            params: {
                auth_user: "system",
                auth_password: "password"
            }
        })
    };

    this.login = function(username, password) {
        var defer = $q.defer();

        $http({
            url: "/login",
            method: "GET",
            params: {
                auth_user: "system",
                auth_password: "password"
            }
        })
            .success( function(data, status, headers, config) {
                alert("success")
            } )
            .error( function(data, status, headers, config) {
                alert("error")
            });

        return defer.promise;
    };

    this.logout = function() {

    };
})