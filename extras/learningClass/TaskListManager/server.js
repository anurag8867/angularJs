const EventEmitter = require('events');
// const client = new EventEmitter();
// const client = require('./client');

class Server extends EventEmitter {
  // constructor() {
  constructor(client) {
    super();
    client.on('command', (command) => {
      console.log('extras/learningClass/TaskListManager/server.js');
      switch (command) {
        case 'help':
        case 'add':
        case 'ls':
        case 'delete':
          this[command]();
          break;
        default:
          this.emit("response", "unknown command");
      }
    });
  }

  help() {
    this.emit("response", "help");
  }

  add() {
    this.emit("response", "add");
  }

  ls() {
    this.emit("response", "ls");
  }

  delete() {
    this.emit("response", "delete");
  }
}

// module.exports = new Server();
// module.exports = (client) => new Server(client);
module.exports = function (client) {
  return new Server(client);
};
