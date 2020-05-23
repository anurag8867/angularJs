var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));
// myEmitter.off('status', 200, 'ok');
console.log(myEmitter.listenerCount('status'))
myEmitter.emit('status', 200, 'ok');