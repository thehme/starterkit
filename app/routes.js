// app/routes.js

// grab the nerd module
var Nerd = require('./models/nerd');

module.exports = function(app) {

	// server routes

	// handle things like api calls
	// authentication calls

	// sample api route
	app.get('/api/nerds', function(req, res) {
	   // use mongoose to get all nerds in the database
	   Nerd.find(function(err, nerds) {
	      // if there is an error retrieving, send an error
	      // nothing after res.send(err) will execute
	      
 	      if(err) {
	         res.send(err);
	      }

	      res.json(nerds);
	   });
	});

	// other CRUD actions
	// route to handle creating (app.post)
	// route to hangle deleting (app.delete)

	// frontend routes

	// route to handle all angular requests
	app.get('*', function(req, res) {
	   // load public html file
	   res.sendfile('./public/views/index.html'); 
	});
};

