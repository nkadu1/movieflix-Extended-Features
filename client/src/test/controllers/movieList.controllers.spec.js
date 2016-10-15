describe('movieListController', function () {
    var listdata = [{
        "name": "AngularJs Tutorial",

    }]

    var $controller, service, $rootScope, $q, $scope;



    beforeEach(module('movieflix'))
    beforeEach(inject(function (_$controller_, _$rootScope_, movieService, _$rootScope_, _$q_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = {};
        service = movieService
        $controller = _$controller_;
        movieListController = $controller('movieListController', {'$rootScope': $rootScope, '$scope': $scope});

    }))


    it('should exist', function () {
        expect(movieListController).toBeDefined();
    });

    it('Should have method name getTitles', function () {
        var ctrl = $controller('movieListController', {$scope: $scope});
        expect(ctrl.getTitles).toBeDefined();
    })

    it('Should load data in titles Array in controller', function () {
        var vm = $controller('movieListController', {$scope: $scope});
        vm.titles = [];
        spyOn(service, 'getTitles').and.callFake(function () {
          //  console.log("Inside the spyyyy: " + service);
            var deferred = $q.defer();
            deferred.resolve(listdata)
            return deferred.promise
        })
        service.getTitles()
            .then(function () {
           //     console.log("listdata[0]name. : " + listdata[0].name);
                $rootScope.$apply()
                expect(vm.titles[0].name).toBe(listdata[0].name)
            })

    })

})
