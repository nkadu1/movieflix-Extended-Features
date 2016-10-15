/**
 * Created by niraj on 8/18/2016.
 */
(function () {
    'use strict'

    angular
        .module('movieflix')
        .controller('loginController',loginController)

    loginController.$inject = ['userService','$http','$location','$routeParams']
    function loginController(userService,$http,$location,$routeParams){
        var vm = this;
        vm.checkUser =  checkUser;
        /*
        Function to query service to check for valid user
         */
        function checkUser(form){
            vm.role=  'User'
            userService
                .checkUser(vm.user)
                .then(function(Outuser){
                    console.log(Outuser);
                    //loginVm.user= Outuser;
                    $location.path('/movie-list');
                },function(error){
                    clear(form);
                    vm.errorMessage = 'Invalid User';
                })
        }

        /*
         Function clear the fields of login form
         */
        function clear() {
            vm.user = {};
            // Set back to pristine.
            vm.loginForm.$setPristine();
            // Since Angular 1.3, set back to untouched state.
            vm.loginForm.$setUntouched();
        }
    }
})();

