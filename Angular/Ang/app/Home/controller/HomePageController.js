(function () {
    angular.module('app.home').controller('HomePageController',
        function ($scope, $state) {
            'use strict';
            $scope.iAm = 'HomePageController';
        });
})();