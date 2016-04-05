var cartController = require('../cart/cartController.js');

var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.get('/api/carts', cartController.getCartItems);
  app.post('/api/carts', cartController.addToCart);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
}
