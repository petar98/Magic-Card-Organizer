'use strict';

app.directive('showProfile', [function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/show-profile.html',
        controller: 'NavigationBarController'
    }
}]);