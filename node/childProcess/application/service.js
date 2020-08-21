process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

console.log("numbernumbernumbernumbernumber");

let counter = 0;
const calculate = (req, res, next) => {
    let number = 0;
    let { limit } = req.query;
    if (limit) limit = parseInt(limit);
    if (!limit) limit = 50000000000;
    for (let index = 0; index < limit; index++) {
        number += index;
    }
    console.log(number);
    return number;
};
process.send({ counter: calculate() });

console.log("number");
process.on('message', (data) => {
    console.log('data---------', data, 'data+++++++++++++++', require('path').basename(__filename))
});

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code, require('path').basename(__filename));
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code, require('path').basename(__filename));
});

process.on('close', (code) => {
    console.log('Process close event with code: ', code, require('path').basename(__filename));
});

process.on('warning', (warning) => {
    console.warn(warning.name);    // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack);   // Print the stack trace
});