var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('connected');
});

client.set('framework', 'AngularJS', function (err, data) {
    console.log({ err });
    console.log({ data });
});

client.get('framework', function (err, reply) {
    console.log({ reply });
});