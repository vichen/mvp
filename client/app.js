(function () {
  'use strict';

  angular.module('app', [
    'ngRoute'
    ])
    .config(function($routeProvider, $locationProvider){
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl: 'search/search.html',
          controller: 'SearchController'
        })
        .when('/product/:productId', {
          templateUrl: 'product/product.html',
          controller: 'ProductController'
        })
        .when('/cart/', {
          templateUrl: 'cart/cart.html',
          controller: 'CartController'
        })
        .otherwise({
          redirectTo: '/'
        })
    });

})();
