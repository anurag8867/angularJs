const aws = require("aws-sdk");
const s3 = new aws.S3();

aws.config = {
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx",
    "region": "us-east-1"
};
async function putObjectAwaitChildProcess({ candidateId = "anurag", buffer, path = new Date(), mimeType }) {
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

async function uploadImagesAwaitChildProcess({ body, docs }) {

    docs = Array.isArray(docs) ? docs : [docs]
    let funArray = [];
    docs.forEach((value) => {
        funArray.push(putObjectAwaitChildProcess({ buffer: value.data, mimeType: value.mimetype }));
    });
    let resp = await Promise.all(funArray);
    return resp;
}
console.log(process.argv, 'process.argv--------------');

// uploadImagesAwaitChildProcess({ docs: process.argv[2] });



process.on('message', (data) => {
    console.log('data---------', data, 'data+++++++++++++++', require('path').basename(__filename))
});

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code, require('path').basename(__filename));
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code, require('path').basename(__filename));
});

process.on('close', (code) => {
    console.log('Process close event with code: ', code, require('path').basename(__filename));
});

process.on('warning', (warning) => {
    console.warn(warning.name);    // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack);   // Print the stack trace
});
// console.log(process.connected, 'extras/node/childProcess/fork/support.js', require('path').basename(__filename));