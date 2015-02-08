'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport');

module.exports = function(app) {
	// User Routes
	var users = require('../../app/controllers/users.server.controller');

	// app.route('*')
	//     .get(function(req, res, next) {
	//         var home = req.url.indexOf('/home') === -1;

	//         // If request is not home
	//         // Render index.html and pass further routing to AngularJS
	//         // Otherwise pass request to the server
	//         if (!home) {
	//             next();
	//         }else{
	//         	res.render('index');
	//         }
 //    });
	app.route('/home').get(users.requiresLogin); 

};