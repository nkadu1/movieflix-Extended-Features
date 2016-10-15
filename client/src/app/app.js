/**
 * Created by niraj on 8/17/2016.
 */
//(function(){
    'use strict'

    angular
        .module('movieflix',['ngMessages','ngRoute','ui.bootstrap','ngSanitize', 'com.2fdevs.videogular',
            'com.2fdevs.videogular.plugins.controls',
            'com.2fdevs.videogular.plugins.overlayplay','infinite-scroll',
            'com.2fdevs.videogular.plugins.poster'])

        .config(moduleconfig)
    moduleconfig.$inject =  ['$routeProvider'];

    function moduleconfig($routeProvider){
        $routeProvider
            .when('/movie-list',{
                templateUrl:'app/views/movieList.tmpl.html',
                controller:'movieListController',
                controllerAs:'movieListVm'
            })
           .when('/movies/movieDetails/:_id',{
                templateUrl:'app/views/movieDetails.tmpl.html',
                controller:'movieDetailsController',
                controllerAs:'movieVm'
            })
            .when('/login',{
                templateUrl:'app/views/login.tmpl.html',
                controller:'loginController',
                controllerAs:'loginVm'
            })

            .when('/home',{
                templateUrl:'app/views/home.tmpl.html'
            })
            .otherwise({
                redirectTo:'/home'
            })
    }


//})()