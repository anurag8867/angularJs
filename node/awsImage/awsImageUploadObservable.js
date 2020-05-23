const aws = require("aws-sdk");
const s3 = new aws.S3();
const { Observable } = require('rxjs');

aws.config = {
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx",
    "region": "us-east-1"
};

// const putObjectObservable = new Observable(observer => {
//     let params = {
//         Bucket: "springverify-assets-id",
//         Body: observer.buffer,
//         Key: "anurag" + "/" + new Date(),
//         ContentType: observer.mimeType
//     };

//     s3.upload(params, function (err, res) {
//         if (err) {
//             return observer.callback(err, null);
//         }
//         return observer.callback(null, res);
//     });
// });

// function uploadImagesObservable({ body, docs, callback }) {
//     putObjectObservable.subscribe({
//         buffer: docs.data,
//         mimeType: docs.mimetype,
//         callback
//     });
// }

const putObjectObservable = new Observable(observer => {
    // let params = {
    //     Bucket: "springverify-assets-id",
    //     Body: observer.buffer,
    //     Key: "anurag" + "/" + new Date(),
    //     ContentType: observer.mimeType
    // };

    // s3.upload(params, function (err, res) {
    //     if (err) {
    //         return observer.callback(err, null);
    //     }
    //     return observer.callback(null, res);
    // });
    console.log('Inside Observable (proof of being lazy)');
    return observer.next(null, { he: 'Hello! I am glad to get to know you.' });
});

function uploadImagesObservable({ body, docs, callback }) {
    putObjectObservable.subscribe({
        next: function (err, data) {
            if (err) return callback(err, null);
            return callback(null, data);
        },
        buffer: docs.data,
        mimeType: docs.mimetype,
        callback
    });
}

module.exports = { uploadImagesObservable };