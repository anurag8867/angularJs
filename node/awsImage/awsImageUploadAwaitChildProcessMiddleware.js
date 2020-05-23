const aws = require("aws-sdk");
const s3 = new aws.S3();

aws.config = {
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx",
    "region": "us-east-1"
};
const child_process = require('child_process');
async function uploadImagesAwaitChildProcessMiddleWare({ body, docs }) {
    var worker_process = child_process.fork("/home/springrole/projects/angularJs/node/awsImage/awsImageUploadAwaitChildProcess.js", [docs]);
    worker_process.on('close', function (code) {
        console.log('child process close with code ' + code);
    });

    worker_process.on('message', function (code) {
        console.log('child process message with code ' + code);
    });
    // var worker_process = child_process.fork("/home/springrole/projects/angularJs/node/awsImage/awsImageUploadAwaitChildProcess.js",
    //     [docs]);
    // console.log(process.connected, 'extras/node/childProcess/fork/master.js');
    // worker_process.on('close', function (code) {
    //     console.log('child process exited with code ' + code);
    // });

    // worker_process.on('message', function (code) {
    //     console.log('child process exited with code ' + code);
    // });
}


function uploadImagesAwaitChildProcessMiddleWare() {
    var worker_process = child_process.fork("/home/springrole/projects/angularJs/node/awsImage/awsImageUploadAwaitChildProcess.js", ['i']);
    worker_process.on('close', function (code) {
        console.log('child process close with code ' + code);
    });

    worker_process.on('message', function (code) {
        console.log('child process message with code ' + code);
    });
}
uploadImagesAwaitChildProcessMiddleWare();
// module.exports = { uploadImagesAwaitChildProcessMiddleWare };