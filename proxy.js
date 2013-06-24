// run : "node proxy.js &"

var http = require('http');

http.createServer(function(request, response) {
	var proxyRequest = http.request({
		host: 'studio', //request.headers['host'],
		port: 8080,
		path: request.url,
		method: request.method,
		headers: request.headers
	}, function(proxyResponse) {
		response.writeHead(proxyResponse.statusCode, proxyResponse.headers);
		proxyResponse.pipe(response);
	});
	request.pipe(proxyRequest);	
}).listen(8085);

