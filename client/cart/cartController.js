(function() {
  'use strict';

  angular.module('app')
    .controller('CartController', function($scope, CartService) {
      $scope.cartProducts = [];

      $scope.getItems = function() {
        CartService.getCartItems()
          .then(function(products) {
            $scope.cartProducts = products;
          })
          .catch(function(error) {
            console.error(error);
          })
      }

      $scope.add = function(product){
        CartService.addToCart(product)
          .then(function(product) {
            $scope.product = product;
          })
          .catch(function(error) {
            console.error(error);
          })
      }
    })
})();