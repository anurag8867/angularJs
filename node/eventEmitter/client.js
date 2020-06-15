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
    console.log({ resp })
    // process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(resp);
    process.stdout.write('\n\> ');
});
var wsServer = new webSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket
    // request is just an enhanced HTTP request. For more info 
    // http://tools.ietf.org/html/rfc6455#page-6
    httpServer: server
});
let command, args;
rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    console.log({ input })
    client.emit('command', command, args);
});