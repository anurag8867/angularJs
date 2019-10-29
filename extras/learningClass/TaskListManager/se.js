const EventEmitter = require('events');
const events = new EventEmitter();

class se {
  constructor() {
    // super();
    events.on("emit", () => {
      console.log("asdfghj");
    });
    events.emit("emit", "sdfd");
  }

  // events.emit("emit", "sdfd");

}
module.exports = new se();

