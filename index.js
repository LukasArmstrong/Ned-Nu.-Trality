var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.get('/', function(req, res)	{
	res.render('pages/index.ejs');
});

app.listen(port, function() {
	console.log('it actuslly fookin worked');
	});
