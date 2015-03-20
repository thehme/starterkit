// server.js
// need to run with following command in Ubuntu
// nodejs server.js

// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to mongoDb db
// credentials go in the config/db.js file
// created mongolab and added url + credentials in db.js file
var mongoose = require('mongoose');
mongoose.connect(db.url);

// get all data/stuff of the body (POST) param
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app)

// start app
// startup app at http://localhosts:8080
app.listen(port);

// shoutout to the me
console.log("Hello thehme!");

// expose app
exports = module.exports = app;


