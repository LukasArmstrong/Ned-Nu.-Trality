var express = require('express');
var app = express();
app.get('/', function(req, res)	{
	res.render('pages/index.ejs');
});

app.listen('5000', function() {
	console.log('it actuslly fookin worked');
	});
