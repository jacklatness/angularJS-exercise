'use strict';

angular.module('myApp.version.canada-phone-directive', [])

.directive('canadaPhone', [function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl, ngModel) {
            angular.element(elem).on('keyup', function(e) { 
                // This will remove characters that are not numbers
                var numVal = elem.val().replace(/[^\w\s]/gi, '');

                //This will remove white spaces and returns the input 
                //into an array using the indexes as a regular expression 
                var x = numVal.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
        
                scope.ngModel = numVal; // overwrites ngModel value
                console.log(scope.ngModel);
            });
        }
    };
  }
]);