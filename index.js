var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var directories = fs.readdirSync('/home/vagrant/www');
	var data = '';
	directories.forEach(function(item) { data += item + '\n'});
	res.end(data);
}).listen(8080, '127.0.0.1');
