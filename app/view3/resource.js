
(function () {
    'use strict';

    angular.module('myApp.view3.resource', [])

    .factory('User', [ '$http', function($resource) {   
        
        var factory = {
            getAllUsers: getAllUsers,
            getUser: getUser
        };
          
        function getAllUsers() {
            return $resource({
                method : 'GET',
                url : 'http://localhost:3000/users/'
            });
        }

        function getUser(id) {
            return $resource({
                method : 'GET',
                url : 'http://localhost:3000/users/' + id
            });
        }

        return factory;
    } ]);
})();
