const aws = require("aws-sdk");
const s3 = new aws.S3();

aws.config = {
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx",
    "region": "us-east-1"
};
async function putObjectAwait({ candidateId = "anurag", buffer, path = new Date(), mimeType }) {
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

async function uploadImagesAwait(docs) {
    docs = Array.isArray(docs) ? docs : [docs]
    let funArray = [];
    docs.forEach((value) => {
        funArray.push(putObjectAwait({ buffer: value.data, mimeType: value.mimetype }));
    });
    let resp = await Promise.all(funArray);
    return resp;
}
module.exports = { uploadImagesAwait };