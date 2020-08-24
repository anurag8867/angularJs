const EventEmitter = require('events');
const readline = require('readline');
const webSocketServer = require('websocket').server;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

server.on('response', (resp) => {
    console.log({ resp });
    process.stdout.write(resp);
    process.stdout.write('\n\> ');
});

var wsServer = new webSocketServer({
    httpServer: server
});

let command, args;
rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    console.log({ input })
    client.emit('command', command, args);
});