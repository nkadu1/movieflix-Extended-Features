/**
 * Created by niraj on 9/13/2016.
 */
/**/

describe('movieService', function(){

    var values, service;
    beforeEach(function(){
        module('movieflix');

        inject(function($injector){
            service =  $injector.get('movieService');

        })
    })

    it('should have check user method', function() {
        expect(service.getUrl).toBeDefined();
    });

    it('should have getUrl method', function() {
        expect(service.getUrl).toBeDefined();
    })

    it('should have addRating method', function() {
        expect(service.addRating).toBeDefined();
    });

    it('should demonstrate using expect (200 status)', inject(function($http,$httpBackend,$rootScope) {
        var $scope = {};
        /* Code Under Test */
        $http.get('http://localhost/3005/videos',{
            sessionId:$rootScope.sessionId,
            skip:1,
            limit:10
        })
        .success(function(data, status, headers, config) {
                $scope.valid = true;
                $scope.response = data;

            }).error(function(data, status, headers, config) {
            $scope.valid = false;
        });

        $httpBackend
            .expect('GET', 'http://localhost/3005/videos')
            .respond(200, { data : [1,2,3,4,5,6,7,8,9,0] });

        //to flush each pending request using trained responses.
        expect($httpBackend.flush).not.toThrow();

    }));
})
