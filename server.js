var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('./index.html');

console.log('Server is running on port 8080')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(8080);
