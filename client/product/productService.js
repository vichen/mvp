(function() {
  'use strict';

  angular.module('app')
    .service('ProductService', function ($http) {

    var urlBase = 'https://api.gilt.com/v1/';

    this.getProductById = function(id) {
      return $http.get(urlBase +'products/' + id + '/detail.json?apikey=' + GILT_API_KEY)
        .then(function(res) {
          return res.data; 
        });
    }
  })

})();
