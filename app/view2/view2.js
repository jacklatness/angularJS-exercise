(function () {
  'use strict';

  angular.module('myApp.view2',[
    'ngRoute',
    'myApp.view2.view2-service'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ['$scope', 'View2Service',
    function ($scope, View2Service) {
        $scope.getAllUsers = function () {
      
          View2Service.getAllUsers()
            .then(function success(response) {
              console.log(response);
                // $scope.users = response.data._embedded.users;
                // $scope.message='';
                // $scope.errorMessage = '';
            },
            function error (response) {
                // $scope.message='';
                // $scope.errorMessage = 'Error getting users!';
            });
        }
  }]);
})();