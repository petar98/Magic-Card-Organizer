'use strict';

app.directive('navigation', [function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/navigation.html',
        controller: 'NavigationBarController'
    }
}]);