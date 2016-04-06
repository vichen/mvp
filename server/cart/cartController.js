var Q = require('q');
var util = require('../config/utils.js');
var Cart = require('./cartModel.js');

var findItem = Q.nbind(Cart.find, Cart);
var findAllItems = Q.nbind(Cart.find, Cart);
var addItem = Q.nbind(Cart.create, Cart);

module.exports = {
  allCartItems: function(req, res, next) {
    findAllItems({})
      .then(function(products) {
        res.json(products);
      })
      .fail(function(error) {
        next(error);
      })
  },

  getProductById: function(id) {
      return $http.get(urlBase +'products/' + id + '/detail.json?apikey=' + GILT_API_KEY)
        .then(function(res) {
          return res.data; 
        });
  },

  addToCart: function(req, res, next) {
    var productId = req.body.id;
    var name = req.body.name;
    var brand = req.body.brand;
    var size = req.body.size;
    var price = req.body.skus[0].sale_price;
    var img = req.body.image_urls['91x121'][0].url;

    addItem({
      id: productId,
      name: name,
      brand: brand,
      size: size,
      price: price,
      img: img
    })
      .then(function(err, item) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log('add item: ', item);
        }
      })
  }
}
