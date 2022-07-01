(function () {
  'use strict';

  angular.module('myApp.view2',[
    'ngRoute',
    'myApp.view2.view2.service'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      resolve: {
        resource: function () {
          let resource = {
            url : 'http://localhost:3000/users/'
          };

          return resource;
        }
      }
    });
  }])

  .controller('View2Ctrl', ['$scope', 'View2Service', '$http', 'resource', '$q', '$route',
    function ($scope, View2Service, $http, resource, $q, $route) {
      $scope.showOldData = true;
      $scope.showNewData = false;

      View2Service.getScheduleForDeletion()
        .then(function success(response) {
          $scope.scheduledForDeletion = response.data;
          $scope.oldData = response.data;
        }, function error (error) {
          console.log(error);
        });

      View2Service.getScheduleForUpdate()
      .then(function success(response) {
        $scope.scheduledForUpdate = response.data;
      }, function error (error) {
        console.log(error);
      });

      $scope.performQ = function () {
        let promise = $q((resolve, reject) => {

          angular.forEach($scope.scheduledForDeletion, function (user) {
            let deleteUrl = resource.url + user.id;

            $http.delete(deleteUrl)
            .then(function (response) {
              resolve('success');
              console.log(response);
            }, function (error) {
              reject('error');
              console.log(error);
            });
          });
        });
        
        $scope.newData = [];

        promise.then(data => {
          if (data === 'success') {
            angular.forEach($scope.scheduledForUpdate, function (user) {
              $http.post(resource.url, user)
              .then(function (response) {
                $scope.showOldData = false;
                $scope.showNewData = true;
                $scope.newData.push(response.data);
              }, function (error) {
                console.log(error);
              });
            });
          }
        });
      };

      $scope.performPromise = function () {
        let promise = new Promise((resolve, reject) => {

          angular.forEach($scope.scheduledForDeletion, function (user) {
            let deleteUrl = resource.url + user.id;

            $http.delete(deleteUrl)
            .then(function (response) {
              resolve('success');
              console.log(response);
            }, function (error) {
              reject('error');
              console.log(error);
            });
          });
        });
        
        $scope.newData = [];

        promise.then(data => {
          if (data === 'success') {
            angular.forEach($scope.scheduledForUpdate, function (user) {
              $http.post(resource.url, user)
              .then(function (response) {
                $scope.showOldData = false;
                $scope.showNewData = true;
                $scope.newData.push(response.data);
              }, function (error) {
                console.log(error);
              });
            });
          }
        });
      };

      $scope.refresh = function () {
        $route.reload()
      }
  }]);
})();