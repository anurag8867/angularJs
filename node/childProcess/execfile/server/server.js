const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.get('/exec', async function (req, res) {
    return res.send({
        resp: await require('../execfile').execute()
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))