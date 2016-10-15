/**
 * Created by niraj on 9/12/2016.
 */

describe('UserService', function(){

    var values, service;
    beforeEach(function(){
        module('movieflix');

        inject(function($injector){
            service =  $injector.get('userService');

        })
    })

    var userservice
    it('should post data (string)', inject(function($http,$httpBackend) {
        var $scope = {};

        /* Code Under Test */
        $http.post('http://localhost/3005/user/auth', {
            username: 'ali',
            password: 'password'
        })
            .success(function(data, status, headers, config) {
                $scope.user = data;
            });
        /* End Code */

        $httpBackend
            .when('POST', 'http://localhost/3005/user/auth', '{"username":"ali","password":"password"}')
            .respond({
                username: 'ali'
            });
        $httpBackend.flush();
        expect($scope.user).toEqual({ username: 'ali' });
    }));
})
