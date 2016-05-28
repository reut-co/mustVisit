/**
 * Created by shlomit.c on 17/05/2016.
 */
(function () {
    'use strict';

    var Clotika = angular.module('Clotika', ['ui.router']);

    var baseDir = "/pages/";
    var homeDir = baseDir + "dashboard/";

    Clotika.config(function($urlRouterProvider, $stateProvider,$locationProvider){
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: homeDir + 'templates/dashboard.html'
            })
           /* .state('login', {
                url: '/login',
                templateUrl: 'Templates/login.html'
            })*/
        ;

        $locationProvider.html5Mode(true);
    })
})();
;/**
 * Created by shlomit.c on 21/05/2016.
 */
/**
 * Created by shlomit.c on 21/05/2016.
 */
(function() {
    var Clotika = angular.module('Clotika');
    Clotika.controller('HomeCtrl', ['$stateParams', function ($stateParams) {

        var vm = this;

    }]);
}());