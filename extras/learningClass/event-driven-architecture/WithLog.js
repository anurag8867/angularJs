const EventEmitter = require('events');
class WithLog extends EventEmitter{
  execute(task) {
    console.log("4");
    this.emit('begin');
    task();
    this.emit('end');
    console.log("8")
  }
}
const withLog = new WithLog();

withLog.on('begin', () => console.log("12"));
withLog.on('end', () => console.log("13"));
withLog.execute(() => console.log("14"))
