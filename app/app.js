(function () {
  'use strict';

  // Declare app level module which depends on views, and core components
  angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3',
    'myApp.version'
  ])
  .config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});

    // $stateProvider.state('view3', {
    //   url: '/view3',
    //   resolve: {
    //     view3: function() {
    //       let resource = {
    //         method : 'GET',
    //             url : 'http://localhost:3000/users/1'
    //       };

    //       return resource;
    //     }
    //   },
    //   views: {
    //     base: {
    //       template: require('./view3.html'),
    //       controler: View3Ctrl
    //     }
    //   }
    // })
  }]);
  
})();