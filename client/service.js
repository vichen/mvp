angular.module('mvp.services')
  .service('Search', ['$http', function ($http) {

    var urlBase = 'https://api.gilt.com/v1/';
    var config = {
      params: {query: searchQuery}
    };

    this.getProducts = function(query) {
      return $http.get(urlBase +'products?q=' + query + '&apikey=' + GILT_API_KEY, config)
        .then(function(res) {
          return res.products;
        });
    }

    
  }])
