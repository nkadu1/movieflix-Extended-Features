/**
 * Created by niraj on 8/18/2016.
 */
(function () {
    'use strict'
    angular
        .module('movieflix')
        .service('movieService',movieService)

    movieService.inject = ['$http','$q','CONFIG','$rootScope'];
    function movieService($http,$q,CONFIG,$rootScope) {
        var vm = this;
        vm.getTitles = getTitles;
        vm.getTitleById = getTitleById;
        vm.successFn = successFn;
        vm.errorFn = errorFn;
        vm.addRating = addRating;
        vm.getUrl = getUrl;
        vm.url =  '';


        /*
         Function to get requested video url
         */
        function getUrl(videoUrl){
            return CONFIG.API_HOST + '/' + videoUrl;
        }

        /*
         Function to get videos from server
         */
        function getTitles(pagecount) {
            return $http({
                method: 'GET',
                url: CONFIG.API_HOST +  '/videos',
                params:{
                    sessionId:$rootScope.sessionId,
                    skip:pagecount,
                    limit:10
                }
            }).then(successFn, errorFn)
        };


        /*
         Function to add rating for the video
         */
        function addRating(rating) {
            return $http({
                method: 'POST',
                url: CONFIG.API_HOST + '/video/ratings',
                data: rating,
                params:{
                    sessionId:$rootScope.sessionId
                }
            }).then(successFn, errorFn)
        };


        /*
         Function to get requested video from server
         */
        function getTitleById(_id) {
          return $http({
                method: 'GET',
                url: CONFIG.API_HOST +  '/video',
                params:{
                    sessionId:$rootScope.sessionId,
                    videoId:_id
                }
            }).then(successFn, errorFn)
        };

        /*
         Function to handle response for success
         */
        function successFn(response){
            console.log('In Success service' + response.data.data.name);
            return response.data;
        }
        /*
         Function to handle reject
         */
        function errorFn(response){
            console.log('In error service' + response)
            return $q.reject('ERROR: ' + response.statusText);;
        }
    }
})()