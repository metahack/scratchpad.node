
var http = require('http');

var s = http.createServer(function (req, res) {

	res.end("Hey, thanks for calling!!");
	
})

s.listen(8080);