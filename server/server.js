var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/shopper');
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var rootPath = path.join(__dirname, '..');
var port = 3000;

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(rootPath + '/client'));
app.use('/node_modules', express.static(rootPath + '/node_modules'));


app.get('/', function(req, res) {
  res.sendFile(rootPath + '/client/index.html');
});

app.get('/*', function(req, res) {
  res.sendFile(rootPath + '/client/index.html');
});

console.log('Server is listening on ' + port);
app.listen(port);
