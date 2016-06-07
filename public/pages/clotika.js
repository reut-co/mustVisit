/**
 * Created by shlomit.c on 17/05/2016.
 */
(function () {
    'use strict';

    var Clotika = angular.module('Clotika', ['ui.router', 'ngAutocomplete']);

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
    });

    Clotika.controller('MainCtrl', ['$stateParams', function ($stateParams) {
        var vm = this;
        vm.locationOptions = null;
        vm.locationDetails = '';
        vm.location = "";
    }]);
})();
