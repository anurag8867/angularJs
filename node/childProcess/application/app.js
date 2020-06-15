const express = require('express'),
    app = express(),
    config = require("config"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    fileUpload = require('express-fileupload');


app.use(fileUpload());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', function (req, res, next) {
    return res.status(200).send("output");
});

var server = app.listen(config.get('port'), () => console.log(`Example app listening at http://localhost:${config.get('port')}`));
module.exports = server;