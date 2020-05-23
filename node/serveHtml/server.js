var express = require('express');
let fs = require('fs');
var app = express();
var PORT = 3200;
var events = require('events');
let client = new events();
app.get('/', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('/home/springrole/projects/angularJs/extras/node/serveHtml/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

app.listen(PORT, function () {
    console.log('Server is running on PORT:', PORT);
});