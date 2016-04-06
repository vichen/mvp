var path = require('path');
var cartController = require('../cart/cartController.js');
var helpers = require('./helpers.js');

var rootPath = path.join(__dirname, '../..');

module.exports = function(app, express) {
  
  app.get('/api/carts', cartController.allCartItems);
  app.post('/api/carts', cartController.addToCart);

  
  app.get('/', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
  app.get('/*', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
}
