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

  addToCart: function(req, res, next) {
    findItem({productId: productId})
      .then(function(match) {
        if (match) {
          res.send(match)
        } else {
          return getProductById(productId);
        }
      })
      .then(function(product) {
        if (product) {
          var newProduct = {
            productId: product.id,
            name: product.name,
            brand: product.brand,
          }
        }
      })
  }
}
