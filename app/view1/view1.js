'use strict';

angular.module('myApp.view1', [
  'ngRoute',
  'myApp.version.limit-directive',
  'myApp.version.canada-phone-directive'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 
  function ($scope) {
    this.phoneNumber = "";

    $scope.$watch("phoneNumber", function(newval, oldval) {
      if (newval != undefined) {
        $scope.length = newval.replace(/[^\w\s]/gi, '').length;
      } else {
        $scope.length = 0;
      }
    });

    $scope.submit = function () {
      if (this.phoneNumber != undefined) {
        this.formattedNumber = this.phoneNumber.replace(/[^\w\s]/gi, '');
      }
    };
}]);