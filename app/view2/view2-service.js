
(function () {
    'use strict';

    angular.module('myApp.view2.view2-service', [])

    .service('View2Service', [ '$http', function($http) {

        this.getAllUsers = function getAllUsers() {
            return $http({
                method : 'GET',
                url : 'view2/view2.json'
            });
        }
    } ]);
})();
