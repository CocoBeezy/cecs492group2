var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res) {
	console.log('yes');
  	res.redirect('/index.html');
	
});

module.exports = router;