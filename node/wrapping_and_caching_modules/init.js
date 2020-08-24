let index = require("./index");
console.log(index);
let wrap = require('module').wrapper;
console.log(__dirname)
console.log(__filename)
console.log(__filename)
console.log({ require })
console.log({ module })
console.log(exports)
console.log(wrap)