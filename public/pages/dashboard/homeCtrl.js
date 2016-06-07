/**
 * Created by shlomit.c on 21/05/2016.
 */
/**
 * Created by shlomit.c on 21/05/2016.
 */
(function() {
    var Clotika = angular.module('Clotika');
    Clotika.controller('HomeCtrl', ['$stateParams', function ($stateParams) {

        var vm = this;

        vm.dashboardImagesScrollFunc = function(){
          console.log('scrolling');
            vm.number+=5;
        };

        vm.number = 30;
        vm.getNumber = function(num) {
            return new Array(num);
        }

    }]);
}());