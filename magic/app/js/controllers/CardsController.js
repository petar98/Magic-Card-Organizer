'use strict';

app.controller('CardsController', function CardsController($scope, fetchCardData) {
   function getData() {
       fetchCardData.getData(function cards(data) {
           $scope.cards = data;
       });
   }
});