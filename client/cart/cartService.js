(function() {
  'use strict';

  angular.module('app')
    .service('cartService', function() {

      this.addToCart = function(product) {
        return $http({
          method: 'POST',
          url: '/api/carts',
          data: product
        })
        .then(function(res) {
          return res.data;
        })
      };

      this.getCartItems = function() {
        return $http({
          method: 'GET',
          url: '/api/carts'
        })
        .then(function(res) {
          return res.data;
        })
      }

    })
})();