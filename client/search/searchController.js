(function() {
  'use strict';

  angular.module('app')
    .controller('SearchController', function($scope, SearchService) {
      $scope.products = [];

      $scope.search = function(query) {
        SearchService.getProducts(query)
          .then(function(products) {
            $scope.products = products;
          })
          .catch(function(error) {
            console.error(error);
          })
      }
  });

})();
