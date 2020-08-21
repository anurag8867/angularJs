let create = require('./create.js');
function createBinaryTreeArray(array) {
    let arr = [];
    array.sort();
    let len = array.length;
    let mid = Math.floor(len / 2);
    arr.push(array[mid])
    for (let index = 1; index <= len; index++) {
        arr.push(array[mid - index]);
        arr.push(array[mid + index]);
    }
    return arr;
}
let binaryArray = createBinaryTreeArray([1, 2, 3, 4, 5, 6, 7, 8, 9,]);
let tree = create.createBinaryTree(binaryArray)
console.log(JSON.stringify(tree));