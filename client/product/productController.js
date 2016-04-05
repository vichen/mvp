(function() {
  'use strict';

  angular.module('app')
    .controller('ProductController', function($routeParams, $scope, ProductService) {
      ProductService.getProductById($routeParams.productId)
        .then(function(product) {
          $scope.product = product;
        })
        .catch(function(error) {
          console.log(error);
        })
  });

})();
