const fs = require('fs');
const child_process = require('child_process');
for(var i=0; i<1; i++) {
  var worker_process = child_process.fork("support.js", [i]);
  console.log(process.connected, 'extras/node/childProcess/fork/master.js');
  worker_process.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });

  worker_process.on('message', function (code) {
    console.log('child process exited with code ' + code);
  });
}
