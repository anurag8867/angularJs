var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('https://pdf-reports-springrole.s3.amazonaws.com/Documents/133777123.pdf');

console.log(index);