/**
 * Created by niraj on 8/18/2016.
 */
(function () {
    'use strict';
    angular
        .module('movieflix')
        .controller('movieDetailsController', movieDetailsController);

    movieDetailsController.$inject = ['movieService', '$routeParams', '$location','$sce','CONFIG'];
    function movieDetailsController(movieService, $routeParams, $location,$sce,CONFIG) {
        var movieVm = this;
        var movieVm = this;
        movieVm.addRating = addRating;
        movieVm.url='';
        movieVm.geturl = geturl;

        /*
         Function to query service to get the video by Id for details view
         */
        init();
        function init(){
            movieService
                .getTitleById($routeParams._id)
                .then(function (title) {
                    movieVm.movie = title.data;
                    movieVm.url = movieVm.movie.url;
                    console.log('In get Movi : ' + movieVm.url)
                    movieVm.res  =  movieService.getUrl(movieVm.url);

                }, function (error) {
                    console.log(error);
                });
        }

        /*
         Function to get the loaded url from service to be displayed in detail view
         */
        function geturl(){
            console.log('movieVm.url ' + movieVm.url )
            var res =  movieService.getUrl(movieVm.url);
            console.log('movieService.getUrl(videoUrl) : ' + res);
            return res;
        }

        /*
         Function to invoke service method to add the new rating for video
         */
        function addRating(form) {
            movieService
                .getTitleById($routeParams._id)
                .then(function (movie) {
                    movieVm.newRating.videoId = movie.data._id;
                    movieService
                        .addRating(movieVm.newRating)
                        .then(function (rating) {
                            movieVm.submitMessage = 'Rating Added Successfully';
                            clear(form);
                        }, function (error) {
                            console.log(error);
                        });
                }, function (error) {
                    console.log(error);
                });

        }
        /*
         Function clear the fields of login form
         */
        function clear() {
            movieVm.newRating = {};
            // Set back to pristine.
            movieVm.reviewForm.$setPristine();
            // Since Angular 1.3, set back to untouched state.
            movieVm.reviewForm.$setUntouched();
        }

        function successFn(response) {
            return response.data.url.toString();
        }

    }

})();

