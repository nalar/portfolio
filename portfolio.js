// Requires several modules
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public')); // Tells express to use the static functionality

var server = app.listen(3123, function () {									// Set express to listen on port 3000
	console.log('Portfolio running at: ' + server.address().port); // Log that information
});