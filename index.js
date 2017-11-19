var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.get('/', function(req, res)	{
	res.render('pages/index.ejs');
});
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
	console.log('it actuslly fookin worked');
});
d3.csv("Senate.csv", function(data) {
  console.log(data[0]);
});	
