const EventEmitter = require('events');
const events = new EventEmitter();
const se = require('./se')

// events.on("anurag", () => {
//   console.log("asdfghj");
// });

events.emit("emit", "sdfd");
