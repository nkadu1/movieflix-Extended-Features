/**
 * Created by niraj on 8/18/2016.
 */
(function () {
    'use strict'
    angular
        .module('movieflix')
        .service('userService',userService)

    userService.inject = ['$http','$q','CONFIG','$rootScope'];
    function userService($http,$q,CONFIG,$rootScope){
        var signupVm = this;
        signupVm.sessionId;
        signupVm.checkUser = checkUser;
        signupVm.successFn =  successFn;
        signupVm.errorFn = errorFn;
        signupVm.logout =  logout;
        function logout() {
            signupVm.user = {};
        }
        /*
         Function to validate user by requesting server
         */
        function checkUser(user){
            return $http({
                method:'POST',
                url: CONFIG.API_HOST + '/user/auth',
                data:user
            }).then(successFn,errorFn)};

        /*
         Function to handle response for success
         */
        function successFn(response){
            signupVm.user =  response.data;
            signupVm.sessionId  =  response.data.sessionId;
            $rootScope.sessionId  =  response.data.sessionId;
            return response.data;
        }


        /*
         Function to handle reject
         */
        function errorFn(response){
            return $q.reject('ERROR: ' + response.statusText);;
        }

    }
})()