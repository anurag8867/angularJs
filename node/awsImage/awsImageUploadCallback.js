const aws = require("aws-sdk");
const s3 = new aws.S3(),
    async = require('async');

aws.config = {
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx",
    "region": "xxx"
};
function putObjectCallback({ candidateId = "anurag", buffer, path = new Date(), mimeType, next }) {
    let params = {
        Bucket: "springverify-assets-id",
        Body: buffer,
        Key: candidateId + "/" + path,
        ContentType: mimeType
    };
    s3.upload(params, function (err, res) {
        if (err) {
            return next(err, null);
        }
        return next(null, res);
    });
};

function uploadImagesCallback({ body, docs, callback }) {
    docs = Array.isArray(docs) ? docs : [docs]
    let funArray = [];
    docs.forEach(function (value) {
        funArray.push(function (callback) {
            funArray.push(putObjectCallback({
                buffer: value.data, mimeType: value.mimetype, next: function (err, data) {
                    if (err) return callback(err, null);
                    return callback(null, data);
                }
            }))
        })
    });
    async.parallel(funArray, (err, data) => {
        if (err) return callback(err, null);
        return callback(null, data);
    });
}
module.exports = { putObjectCallback, uploadImagesCallback };