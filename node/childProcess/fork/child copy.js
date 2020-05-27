process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;
const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 6000000000; i++) {
        sum += i;
    };
    return sum;
};
process.send({ counter: longComputation() });