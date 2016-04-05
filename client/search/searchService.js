(function() {
  'use strict';

  angular.module('app')
  	.service('SearchService', function ($http) {

    var urlBase = 'https://api.gilt.com/v1/';

    this.getProducts = function(query) {
      return $http.get(urlBase +'products?q=' + query + '&apikey=' + GILT_API_KEY)
        .then(function(res) {
          return res.data.products; 
        });
    }
  })

})();
