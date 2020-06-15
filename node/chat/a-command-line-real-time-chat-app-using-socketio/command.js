const { spawn } = require("child_process");
let arg = "npm i express -s";
let spl = arg.split(" ");


const ls = spawn(spl[0], spl.slice(1));

ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});