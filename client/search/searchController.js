(function() {
  'use strict';

  angular.module('app')
    .controller('SearchController', function($scope, $location, SearchService, CartService) {
      $scope.products = [];


      $scope.search = function(query) {
        $location.search('q', query);
        SearchService.getProducts(query)
          .then(function(products) {
            $scope.products = products;
          })
          .catch(function(error) {
            console.error(error);
          })
      }

      function init() {
        var params = $location.search();
      
        if (params.q) {
          $scope.search(params.q);
        }
        
      }

      init();
      $scope.add = CartService.addToCart;
  });

})();
