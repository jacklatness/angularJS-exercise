
(function () {
    'use strict';

    angular.module('myApp.view2.view2.service', [])

    .service('View2Service', [ '$http', function($http) {

        var view2Service = {
            getScheduleForDeletion : getScheduleForDeletion,
            getScheduleForUpdate: getScheduleForUpdate
        }

        function getScheduleForDeletion() {
            return $http({
                method : 'GET',
                url : 'http://localhost:3000/delete/'
            });
        }

        function getScheduleForUpdate() {
            return $http({
                method : 'GET',
                url : 'http://localhost:3000/update/'
            });
        }

        return view2Service;
    } ]);
})();
