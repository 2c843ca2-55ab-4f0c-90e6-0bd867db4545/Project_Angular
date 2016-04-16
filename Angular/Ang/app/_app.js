angular.module("app.home", []);
angular.module('app', ['ui.router','app.home']).config([
    '$stateProvider',
    function ($stateProvider) {
        'use strict';

       

    }]).run(function ($rootScope, $state) {
        $state.transitionTo('intialize');
    }
       
);