(function () {
  'use strict';

  angular.module('myApp.view3',[
    'ngRoute',
    'myApp.view3.resource'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl',
      resolve: {
        resource: function () {
          let resource = {
            url : 'http://localhost:3000/users/1'
          };

          return resource;
        }
      }
    });
  }])

  .controller('View3Ctrl', ['$scope', 'User', '$http', 'resource',
    function ($scope, User, $http, resource) {
      const userId = 1;
      
      User.getUser(userId)
      .then(function success(response) {
        $scope.formData = Object.assign({}, response.data);
      }, function error (response) {
        // error
      });

      $scope.onSubmit = function() {
        $scope.submitting = true;
        
        $http.put(resource.url, $scope.formData)
          .then(function (response) {
            $scope.submitting = true;
            $scope.result = response.data;
          }).catch(function(error) {
            $scope.result = error;
          }).finally(function() {
            $scope.submitting = false;
          });
      }
  }]);
})();