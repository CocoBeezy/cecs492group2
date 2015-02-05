var express = require('express'),
	http 	= require('http'),
	path = require('path'),
	passport = require('passport'),
	session = require('express-session'),
	OpenidConnectStrategy = require('passport-openidconnect').Strategy
	routes = require('./routes/index');

var app = express();

//Middleware
app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());
app.use(passport.session());

//Passport authentication
passport.use(new OpenidConnectStrategy({
	authorizationURL: "https://accounts.google.com/o/oauth2/auth",
	tokenURL: "https://accounts.google.com/o/oauth2/token",
	userInfoURL: "https://www.googleapis.com/oauth2/v1/userinfo",
	clientID: "494276931028-hqrqcm5jui3i2nich4ssgmh5s98svt9a.apps.googleusercontent.com",
	clientSecret: "XbdTDRofDIPAyjwm8rLMAjwE",
	callbackURL: "http://localhost:3000/oauth2callback",
	scope: ["openid","email","profile"]
},function(accessToken,refreshToken,profile,done){
	console.log('accessToken: ',accessToken);
	console.log('refreshToken: ',refreshToken);
	console.log('profile: ',profile);
	return done(null,done);
}));

//Routes
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});
app.get('/auth/google',passport.authenticate('openidconnect'));
app.get('/oauth2callback',passport.authenticate('openidconnect',{
	failureRedirect: '/login'
}),function(req,res){
	res.redirect('/');
});

app.get('/a', function(req, res) {
	console.log('yes');
	res.send('index');
});

//Server config
var server = http.createServer(app);
var boot = function(){
	server.listen(app.get('port'),function(){
		console.info('Express server listening on port ' + 
						app.get('port'));

	});
} 
var shutdown = function(){
	server.close();
}
if(require.main === module){
	boot();
}else{
	console.info('Running app as a module');
	exports.boot = boot;
	exports.shutdown = shutdown;
	exports.port = app.get('port');	
}
