var Q = require('q');
var request = require('request');

module.exports = {
  getProductById: function(id) {
    return Q.promise(function(resolve, reject) {
      var url = 'https://api.gilt.com/v1/products/' 
                + id + '/detail.json?apikey=' +
                GILT_API_KEY;
      request(url, function(err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}