(function() {
  'use strict';

  angular.module('app')
    .controller('CheckoutController', function($scope, CartService) {
      $scope.cartProducts;
      $scope.subTotal = 0;

      

      var getItems = function() {
        CartService.getCartItems()
          .then(function(products) {
            $scope.cartProducts = products;
          })
          .catch(function(error) {
            console.error(error);
          })
      }

      var getSubtotal = function() {
        CartService.getCartItems()
          .then(function(products) {
            for (var i = 0; i < products.length; i++) {
              $scope.subTotal += products[i].price;
            }
          })
      }

      getItems();
      getSubtotal();
    })
})();