let EventEmitter = require('events');
let fetch = require("node-fetch");
class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        this.on('data', (data) => console.log('got data ', data));
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}
const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

const readFile = (url, cb) => {
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            cb(null, data);
        });
}

withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');