const fs = require('fs');
const child_process = require('child_process');
function hello() {
  var worker_process = child_process.fork("/home/springrole/projects/angularJs/node/awsImage/awsImageUploadAwaitChildProcess.js", ['i']);
  worker_process.on('close', function (code) {
    console.log('child process close with code ' + code);
  });

  worker_process.on('message', function (code) {
    console.log('child process message with code ' + code);
  });
}
hello();