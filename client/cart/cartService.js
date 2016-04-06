(function() {
  'use strict';

  angular.module('app')
    .service('CartService', function($http) {

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
          console.log('returning get cart items: ', res.data);
          return res.data;
        })
      }

    })
})();