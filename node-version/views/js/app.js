(function() {
    'use strict';

    angular.module('TravelApp', [])
        .controller('TravelController', TravelController);

    TravelController.$inject = ['$scope'];
    function TravelController($scope) {
        $scope.mail1 = 'mahesh.jindal6@gmail.com';
        $scope.mail2 = 'maandeep998@gmail.com';
        $scope.mail3 = 'kunwar31@gmail.com';
        $scope.mail4 = 'madhurgupta10@gmail.com';
    }

})();