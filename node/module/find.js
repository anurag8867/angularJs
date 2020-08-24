setImmediate(() => {
    let a = { a: 'a' };
    console.log({ module }, 'node/module/find.js');
    module.exports = a;
})