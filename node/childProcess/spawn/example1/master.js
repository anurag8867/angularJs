const fs = require('fs');
const child_process = require('child_process');
let path = require("path");
console.log(path.dirname());
for (var i = 0; i < 1; i++) {
  var workerProcess = child_process.spawn('node', ['support.js', i]);

  workerProcess.stdout.on('data', function (data) {
    console.log('stdout++++++++++', 'stdout: ' + data, 'stdout----------');
  });

  workerProcess.stderr.on('data', function (data) {
    console.log('stderr++++++++++', 'stderr: ' + data, 'stderr----------');
  });

  workerProcess.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });
}
