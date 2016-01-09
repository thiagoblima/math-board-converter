var http = require('http');

var server = http.createServer(function(request, response){
             response.writeHead(200, {"Content-Type" : "text/plain"});
	     response.end("Math Server");

});

server.listen(3000);
console.log("Math Server Started");
