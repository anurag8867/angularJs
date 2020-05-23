console.log(process.argv, 'process.argv--------------');
console.log("Child Process " + process.argv[2] + " executed.");

const { spawn, exec } = require('child_process');

const child = spawn('pwd');

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});

exec('find . -type f | wc -l', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`Number of files ${stdout}`);
});