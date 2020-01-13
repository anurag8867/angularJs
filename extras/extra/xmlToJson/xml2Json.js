// let xmld = require("../../../delete.xml");
var xmld = require('fs').readFileSync('/home/springrole/projects/angularJs/extras/extra/xmlToJson/data.xml', 'utf8');
var convert = require('xml-js');


function XML2jsobj(node) {

    var data = {};

    // append a value
    function Add(name, value) {
        if (data[name]) {
            if (data[name].constructor != Array) {
                data[name] = [data[name]];
            }
            data[name][data[name].length] = value;
        }
        else {
            data[name] = value;
        }
    }

    // element attributes
    var c, cn;
    for (c = 0; cn = node.attributes; c++) { 
        Add(cn.name, cn.value); 
    }
    // child elements
    for (c = 0; cn = node.childNodes; c++) {
            if (cn.nodeType == 1) {
                if (cn.childNodes.length == 1 && cn.firstChild.nodeType == 3) { // text value Add(cn.nodeName, cn.firstChild.nodeValue); } else { // sub-object Add(cn.nodeName, XML2jsobj(cn)); } } }

                    return data;

                }
            }}
        }

                // handle response
                function XHRhandler() {

                    if (xhr.readyState == 4) {

                        var obj = XML2jsobj(xhr.responseXML.documentElement);

                        // do something with our returned data...
                        console.log(obj);

                        xhr = null;

                    }

                }


                // example XML feed
                var url = "/home/springrole/projects/angularJs/extras/extra/xmlToJson/data.xml";

                // AJAX request
                var xhr = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
                xhr.onreadystatechange = XHRhandler;
                xhr.open("GET", url, true);
                xhr.send(null);












// var xml =
// '<?xml version="1.0" encoding="utf-8"?>' +
// '<note importance="high" logged="true">' +
// '    <title>Happy</title>' +
// '    <todo>Work</todo>' +
// '    <todo>Play</todo>' +
// '</note>';
// var result2 = convert.xml2json(xmld, {compact: false, spaces: 4});
// console.log(result2);
// console.log(result1, '\n', result2)



let data = JSON.parse(JSON.stringify({}));