describe('movieDetailsController', function () {

    var listdata = {
        "_id": 1,
        "name": "AngularJs Tutorial"
    }
    var $rootScope, $scope, $controller, service;

    beforeEach(module('movieflix'));

    beforeEach(inject(function (movieService, _$rootScope_, _$controller_, _$q_) {
        $rootScope = _$rootScope_;
        $scope = {};
        $controller = _$controller_;
        service = movieService;
        $q = _$q_
        movieDetailsController = $controller('movieDetailsController', {'$rootScope': $rootScope, '$scope': $scope});



    }));

    it('should exist', function () {
        expect(movieDetailsController).toBeDefined();
    });

    it('Should load data by Id', function () {
        var vm = $controller('movieDetailsController', {$scope: $scope});
        vm.titles = [];
        spyOn(service, 'getTitleById').and.callFake(function () {
            console.log("Inside the spyyyy: " + service);
            var deferred = $q.defer();
            deferred.resolve(listdata)
            return deferred.promise
        })
        service.getTitles()
            .then(function () {
                console.log("listdata name. : " + listdata.name);
                $rootScope.$apply()
                expect(listdata.name).toBe('AngularJs Tutorial')
            })

    })

});



