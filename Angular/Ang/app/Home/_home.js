angular.module('app.home', ['ui.router']).config([
    '$stateProvider',
    function ($stateProvider) {
        'use strict';

        // Shared views
        var noResultsView = {
            templateUrl: '/app/common/views/NoResults.html'
        },
            // Order Review states
            homepageTemplate = {
                abstract: true,
                url: '/Home/details',
                name: 'HomePageTemplate',
                views: {
                    'pageTemplate': {
                        controller: 'HomePageController',
                        templateUrl: '/app/home/views/pagetemplate.html'
                    }


                }
            },
            abstractHomeState = {
                abstract: true,
                parent: homepageTemplate,
                name: 'home',
                url: '',
                views: {
                    'navigation_template': {
                        templateUrl: '/app/home/views/navigation.html'
                    },
                    'home': {
                        templateUrl: '/app/home/views/home.html'
                    }

                }
            },
            homeViewsState = {
                abstract: true,
                parent: abstractHomeState,
                name: 'home.views',
                url: '',
                views: {
                    'Donut_template': {
                        templateUrl: '/app/Graphs/views/Donut_Template.html'
                    },
                    'Area_template': {
                        templateUrl: '/app/Graphs/views/Area_Template.html'
                    },
                    '': {
                        templateUrl: '/app/Graphs/views/Load_Scripts.html'
                    },
                    'navigation_sidebar': {
                        templateUrl: '/app/home/views/sidebar.html'
                    }

                }

            },
            intialize = {
                parent: homeViewsState,
                name: 'intialize',
                url: '',
                onEnter: function () {
                    //alert('Hi');
                },
                onExit: function () {
                    //alert('Bye');
                }
            };



        // Register states with $stateProvider
        $stateProvider
            .state(homepageTemplate)
            .state(abstractHomeState)
            .state(homeViewsState)
            .state(intialize);

    }]);