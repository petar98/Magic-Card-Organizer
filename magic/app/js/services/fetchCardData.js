'use strict';

app.factory('fetchCardData', ['$http', function ($http) {
    function getData() {
        $http({method: get, url: 'https://api.magicthegathering.io/v1/cards?name="zurgo helmsmasher"'}).
            then(function (response) {
                return response.data;
            }, function (response) {
                return response.error;
            });
    }
}]);