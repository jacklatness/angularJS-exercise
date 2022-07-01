(function () {
  'use strict';

  describe('myApp.view1 module', function() {
    var $scope = null;
    var view1Ctrl = null;

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function(){
      
      beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
      }));

      it('should check $scope.$watch', function() {
        view1Ctrl.phoneNumber = '1231sdas';
        $scope.$digest();

        view1Ctrl.phoneNumber = '1231';
        $scope.$digest();

        expect(view1Ctrl.phoneNumber).toEqual('1231');
        expect(view1Ctrl).toBeDefined();
      });

      it('should check controller dependencies', function() {
        expect(view1Ctrl).toBeDefined();
      });

    });
  });
})();