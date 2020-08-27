var request = require('request');
var convert = require('xml-js');
var options = {
  'method': 'POST',
  'url': 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL',
  'headers': {
    'Content-Type': 'text/xml'
  },
  body: "<Envelope xmlns=\"http://schemas.xmlsoap.org/soap/envelope/\">\n    <Body>\n        <CapitalCity xmlns=\"http://www.oorsprong.org/websamples.countryinfo\">\n            <sCountryISOCode>IN</sCountryISOCode>\n        </CapitalCity>\n    </Body>\n</Envelope>"

};

request(options, function (error, response) {
  if (error) throw new Error(error);

  var result1 = convert.xml2json(response.body, {compact: true, spaces: 4});
var result2 = convert.xml2json(response.body, {compact: false, spaces: 4});

console.log({result1});
let obj = JSON.parse(result1)
let obj2 = JSON.parse(result2)
console.log({res:JSON.parse(result1)});
console.log({obj2});
  console.log(response.body);
});
