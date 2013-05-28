var AuthService = angular.service("AuthService", function($q, $http) {
    this.sesssionKey = null;

    this.loginTest = function() {
        $http({
            url: "http://10.0.1.4:8080/reachengine/security/login",
            method: "GET",
            data: {
                auth_user: "system",
                auth_password: "password"
            }
        })
    };

    this.login = function(username, password) {
        var defer = $q.defer();

        $http
            .get({
                url: "http://10.0.1.4:8080/reachengine/security/login",
                data: {
                    auth_user: "system",
                    auth_password: "password"
                }
            })
            .success( function(data, status, headers, config) {

            } )
            .error( function(data, status, headers, config) {

            });

        return defer.promise;
    };

    this.logout = function() {

    };
})