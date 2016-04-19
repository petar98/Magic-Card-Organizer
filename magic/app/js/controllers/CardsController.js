'use strict';

app.controller('CardsController', function CardsController($scope, fetchCardData) {
   function getData(search) {
       fetchCardData.getData(function cards(data) {
           $scope.cards = data;
       });
   }
});