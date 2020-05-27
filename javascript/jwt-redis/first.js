var redis = require('redis');
var JWTR = require('jwt-redis').default;
//ES6 import JWTR from 'jwt-redis';
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);

var secret = 'secret';
var jti = 'test';
var payload = { jti };

// Create a token
jwtr.sign({ payload }, secret)
    .then(async (token) => {
        console.log(token);
        // Token verification
        let toke = await jwtr.verify(token, secret);
        console.log(toke);

        console.log(await jwtr.destroy(toke.jti));
        // secret = secret + "anurag"
        console.log(await jwtr.verify(token, secret));
    });