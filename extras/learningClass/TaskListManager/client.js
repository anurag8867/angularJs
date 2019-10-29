const EventEmitter = require('events');
const readline = require('readline');
const client = new EventEmitter();
// const server = require('./server');
const server = require('./server')(client);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

server.on('response', (resp) => {
  console.log('extras/learningClass/TaskListManager/client.js');
  console.log(resp);
});

rl.on('line', (input) => {
  console.log(input);
  input = input.split(',').map(function(item) {
    return parseInt(item);
  });
  console.log(input.reduce(function (add, ele) {
    return add + ele;
  }));
  // client.emit("command", input);
});

