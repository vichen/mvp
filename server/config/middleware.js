var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var rootPath = path.join(__dirname, '../..');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(rootPath + '/client'));
  app.use('/node_modules', express.static(rootPath + '/node_modules'));
};
