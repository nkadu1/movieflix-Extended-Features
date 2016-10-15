/**
 * Created by niraj on 9/12/2016.
 */
describe('loginController', function() {

    var $rootScope, $scope, $controller,registerController;

    beforeEach(module('movieflix'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        loginController = $controller('loginController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should exist', function() {
        expect(loginController).toBeDefined();
    });

    it('should have check user method', function() {
        expect(loginController.checkUser).toBeDefined();
    });

});