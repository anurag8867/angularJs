var socket = require('socket.io-client')('http://localhost:3005');
const repl = require('repl')
const chalk = require('chalk');
let username = "Unknown";

socket.on('connect', () => {
    socket.emit('connection', { name: "a" });
    console.log(chalk.red('=== start chatting ==='));
    username = process.argv[2];
    if (!username) username = "Unknown";
});

//Listener for chat messages
socket.on('message', (data, key) => {
    let { cmd, username } = data;
    if (!username) username = "Unknown";
    username = username && (username[0].toUpperCase() + username.substring(1));

    if (cmd && typeof cmd === "string" && cmd.split('\n') && cmd.split('\n')[0]) {
        console.log(chalk.blue.bold(username + ': ') + chalk.green.bold(cmd.split('\n')[0]));

    } else if (cmd && Buffer.isBuffer(cmd)) {
        console.log(chalk.blue.bold(username + ': ') + chalk.green.bold(cmd.toString()));

    } else if (cmd && typeof cmd === "object") {
        console.log(chalk.blue.bold(username + ': ') + chalk.green.bold(JSON.stringify(cmd)));

    } else {
        console.log(chalk.blue.bold(username + ': ') + chalk.green.bold(cmd));
    }
});

//Listener for Command responses
socket.on('Command', (data, key) => {
    // /c npm i express -s
    let { cmd } = data;

    if (cmd && typeof cmd === "string" && cmd.split('\n') && cmd.split('\n')[0]) {
        console.log(chalk.yellow(cmd.split('\n')[0]));

    } else if (cmd && Buffer.isBuffer(cmd)) {
        console.log(chalk.yellow(cmd.toString()));

    } else if (cmd && typeof cmd === "object") {
        console.log(chalk.yellow(JSON.stringify(cmd)));

    } else {
        console.log(chalk.yellow(cmd));
    }
});

repl.start({
    prompt: '',
    eval: (cmd) => {
        //Handle if user is trying to run a command
        if (cmd && cmd[0] == "/" && cmd.length > 1) {
            let command = cmd.match(/[a-z]+\b/)[0];
            let arg = cmd.substr(command.length + 2, cmd.length);
            chat_command(command, arg);
            cmd = null;
            arg = null;
            command = null;
        } else {
            // send chat message
            socket.send({ cmd, username });
            cmd = null;
        }
    }
});

function chat_command(cmd, arg) {
    switch (cmd) {
        case 'cmd':
        case 'c':
        case 'command': {
            socket.send({ type: 'command', arg, username });
            arg = null;
            break;
        }
        default: {
            console.log({ cmd })
            break;
        }

    }
}

socket.on('disconnect', function () {
    socket.emit('disconnect');
});
