var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/shopper');
require('./config/middleware')(app, express);
require('./config/routes')(app, express);

var port = 3000;

console.log('Server is listening on ' + port);
app.listen(port);
