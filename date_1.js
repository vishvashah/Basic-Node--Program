var http = require('http');
var dt = require('./date');
 
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Date and Time:" +dt.myDateTime());
	res.end();
}).listen(3000);