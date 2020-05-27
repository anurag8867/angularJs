const { exec } = require('child_process');

// exec('find . -type f | wc -l', (err, stdout, stderr) => {
let funcs = {};
funcs.execute = function () {
  return new Promise((resolve, reject) => {
    exec('node /home/springrole/projects/angularJs/node/childProcess/spawn/example1/helloWorld.js', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      if (stdout) {
        console.log(`Number of files ${stdout}`);
        resolve({ stdout, stderr })
      }
    });
  });
}

module.exports = funcs;