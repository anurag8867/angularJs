const aws = require("aws-sdk");
const s3 = new aws.S3(),
    async = require('async');

aws.config = {
    "accessKeyId": "xyz",
    "secretAccessKey": "xyz",
    "region": "us-east-1"
};
function putObjectPromise({ candidateId = "anurag", buffer, path = new Date(), mimeType, callback }) {
    let params = {
        Bucket: "springverify-assets-id",
        Body: buffer,
        Key: candidateId + "/" + path,
        ContentType: mimeType
    };
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, res) {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
};

function uploadImagesPromise({ body, docs, callback }) {
    docs = Array.isArray(docs) ? docs : [docs]
    let funArray = [];
    return new Promise((resolve, reject) => {
        docs.forEach(function (value) {
            funArray.push(function (callback) {
                funArray.push(putObjectPromise({
                    buffer: value.data, mimeType: value.mimetype
                }).then((data) => {
                    return callback(null, data);
                }).catch((err) => callback(err, null)));
            })
        });
        async.parallel(funArray, (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
}
module.exports = { putObjectPromise, uploadImagesPromise };