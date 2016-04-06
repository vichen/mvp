(function() {
  'use strict';

  angular.module('app')
    .controller('ProductController', function($routeParams, $scope, ProductService, CartService) {
      ProductService.getProductById($routeParams.productId)
        .then(function(product) {
          $scope.product = product;
        })
        .catch(function(error) {
          console.log(error);
        });

      $scope.add = CartService.addToCart;
  });

})();
