var events = require('events');
var myEmitter = new events.EventEmitter();
function c1() { console.log('an event occurred!'); }
function c2() { console.log('yet another event occurred!'); }
myEmitter.on('eventOne', c1); // Register for eventOnemyEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOnemyEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.emit('eventOne');
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.emit('eventOnce');