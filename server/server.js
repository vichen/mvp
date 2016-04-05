var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/shopper');
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = 3000;

console.log('Server is listening on ' + port);
app.listen(port);
