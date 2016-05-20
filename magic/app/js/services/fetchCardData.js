//'use strict';
//
//app.factory('fetchCardData', function ($http, search) {
//    return {
//        getData: function (cardName, successcb) {
//            $http({method: 'GET', url: "https://api.magicthegathering.io/v1/cards?name=" + cardName})
//                .success(function (data, status, headers, config) {
//                    successcb(data);
//                })
//                .error(function (data, status, headers, config) {
//
//                });
//        }
//    }
//});

app.factory('fetchCardData',
    function ($resource, cardDataUrl, name) {
        var adsResource = $resource(
            cardDataUrl + name,
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getCards: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);