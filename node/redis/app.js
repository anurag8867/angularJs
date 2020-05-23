var redis = require('redis');
var client = redis.createClient();
client.on('connect', function () {
    console.log('connected');
});

// client.set('11', "anurag");

client.get('11', function (err, reply) {
    console.log({ reply });
});

// client.hmset('framework', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');


// client.hgetall('framework', function (err, object) {
//     console.log({ object });
// });

// client.hmset('123', {
//     'javascript': 'AngularJS',
//     'css': 'Bootstrap',
//     'node': 'Express'
// });


// client.hgetall('123', function (err, object) {
//     console.log(object);
// });

// client.rpush(['rpush', 'angularjs', 'backbone'], function (err, reply) {
//     console.log(reply); //prints 2
// });
// client.lpush(['lpush', 'angularjs', 'backbone'], function (err, reply) {
//     console.log(reply); //prints 2
// });

// client.lrange('lpush', 0, -1, function (err, reply) {
//     console.log(reply); // ['angularjs', 'backbone']
// });