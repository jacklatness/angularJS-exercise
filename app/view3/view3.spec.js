'use strict';

describe('myApp.view3 module', function() {
  var $scope = {};
  let resource = {
    url : 'http://localhost:3000/users/1'
  };
  var view3Ctrl = null;

  beforeEach(module('myApp.view3'));

  describe('view3 controller', function(){

    beforeEach(inject(function($rootScope, $controller) {
      view3Ctrl = $controller('View3Ctrl', {$scope: $scope, resource: resource});
    }));

    it('view3Ctrl should check dependency', function() {
      expect(view3Ctrl).toBeDefined();
    });

    it('perform update', function() {
      $scope.onSubmit();
      expect($scope.formData).toEqual($scope.result);
    });
  });
});