/**
 * Created by niraj on 8/17/2016.
 */
(function () {
    'use strict'

    angular
        .module('movieflix')
        .controller('movieListController', movieListController)

    movieListController.$inject = ['movieService', '$scope', 'userService', '$location']
    function movieListController(movieService, $scope, userService, $location) {

        var movieListVm = this;
        movieListVm.logout = logout;
        movieListVm.getUrl = getUrl;
        movieListVm.getTitles = getTitles;
        movieListVm.currentPage = 1;
        movieListVm.count = 0;
        movieListVm.titles = [];
        movieListVm.players = [];

        /*
         Function to implement alternate play & pause functionality
         */
        movieListVm.onPlayerReady = function (API, index) {
            movieListVm.players[index] = API;
        };

        /*
         Function to implement alternate play & pause functionality
         */
        movieListVm.onUpdateState = function (state, index) {
            if (state === 'play') {
                // pause other players
                for (var i = 0, l = movieListVm.players.length; i < l; i++) {
                    if (i !== index) {
                        movieListVm.players[i].pause();
                    }
                }
            }
        };

        /*
         Function to invoke service method to get the list of videos
         */
        function getTitles() {
            movieService
                .getTitles(movieListVm.count)
                .then(function (resObject) {
                    var objectData = resObject.data;
                    console.log('objectData name ' + objectData[0].name)
                    for (var i = 0; i < objectData.length; i++) {
                        movieListVm.titles.push(objectData[i])
                    }
                    console.log('=======Length  ' + movieListVm.titles.length)
                    movieListVm.count = movieListVm.currentPage * 10;
                    movieListVm.currentPage++;

                }, function (error) {
                    console.log(error);
                });
        }

        /*
         Function to invoke service metthod to logout the user and redirect him to front page
         */
        function getUrl(videoUrl) {
            return movieService.getUrl(videoUrl);
        }


        /*
         Function to invoke service metthod to logout the user and redirect him to front page
         */
        function logout() {
            userService.logout()
            $location.path('/home');
        }

        /*
         Function to implement search functionality for videos in list view
         */
        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            else {
                if (item.title.toLowerCase()
                        .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.genre.toLowerCase()
                        .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.year.toLowerCase()
                        .indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
    }


})();
