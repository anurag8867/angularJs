const fs = require('fs');
const child_process = require('child_process');
for (var i = 0; i < 1; i++) {
  var workerProcess = child_process.exec(`node /home/springrole/projects/angularJs/extras/node/childProcess/exec/example2/support.js ` + i + ' Anurag',
    function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
      }
      console.log({ stdout });
      console.log({ stderr });
    });
  workerProcess.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);
  });
}
