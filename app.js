var express = require('express'),
	http 	= require('http'),
	path = require('path'),
	routes = require('./routes/index');

var app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/a', function(req, res) {
	console.log('yes');
	res.send('index');
});

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