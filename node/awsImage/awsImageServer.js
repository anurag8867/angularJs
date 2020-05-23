const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;
let awsImageUploadCallback = require("./awsImageUploadCallback");
let awsImageUploadPromise = require("./awsImageUploadPromise");
let awsImageUploadAwait = require("./awsImageUploadAwait");
let awsImageUploadAwaitChildProcessMiddleWare = require("./awsImageUploadAwaitChildProcessMiddleware");
let awsImageUploadObservable = require("./awsImageUploadObservable");
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
const { Observable } = require('rxjs');

app.post('/observable', function (req, res) {
    return res.send({
        resp: awsImageUploadObservable.uploadImagesObservable({
            body: req.body, docs: req.files.docs, callback: function (err, resp) {
                if (err) return res.send({ err });
                return res.send({ resp: resp || {} });
            }
        })
    });
});

app.post('/awaitChildProcessMiddleWare', async function (req, res) {
    return res.send({
        resp: await awsImageUploadAwaitChildProcessMiddleWare.uploadImagesAwaitChildProcessMiddleWare({
            body: req.body, docs: req.files.docs
        })
    });
});
app.post('/await', async function (req, res) {
    return res.send({
        resp: await awsImageUploadAwait.uploadImagesAwait(req.files.docs)
    });
});

app.post('/awaitNewFunction', async function (req, res) {
    let fs = require('fs');
    const aws = require("aws-sdk");
    const s3 = new aws.S3(),
        async = require('async');
    aws.config = {
        "accessKeyId": "xxx",
        "secretAccessKey": "xxx",
        "region": "us-east-1"
    };
    fs.readFile('/home/springrole/projects/angularJs/node/awsImage/awsImageUploadAwaitNewFunction.js', 'utf-8', async (err, data) => {
        if (err) return res.status(500).send({ err });
        async function uploadToS3(docs) {
            let func = new Function('docs', "aws", "s3", 'async', `${data}`);
            return func(docs, aws, s3, async);
        }
        let resp = await uploadToS3(req.files.docs);
        return res.send({ resp });
    });
});

app.post('/promise', function (req, res) {
    awsImageUploadPromise.uploadImagesPromise({
        body: req.body, docs: req.files.docs
    }).then((resp) => {
        return res.send({
            resp
        });
    }).catch((err) => {
        return res.send({
            err
        });
    });
});

app.post('/callback', function (req, res) {
    awsImageUploadCallback.uploadImagesCallback({
        body: req.body, docs: req.files.docs, callback: function (err, resp) {
            if (err) return res.send({ err });
            return res.send({ resp });
        }
    });
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))