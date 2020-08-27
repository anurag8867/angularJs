var soap = require('soap');
// var url = 'http://example.com/wsdl?wsdl';
var url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
var args = {name: 'value'};
soap.createClient(url, function(err, client) {
    client.MyFunction(args, function(err, result) {
        console.log(result);
    });
});