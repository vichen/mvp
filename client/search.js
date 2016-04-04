var app = angular.module('mvp.search', [])
  .controller('SearchController', function($scope, Search) {
    $scope.products = [];

    var initializeProducts = function(query) {
      Search.getProducts(query)
        .then(function(products) {
          $scope.products = products;
        })
        .catch(function(error) {
          console.error(error);
        })
    }

  });
