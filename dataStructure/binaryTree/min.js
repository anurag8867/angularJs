let create = require('./create.js');

/**
 * 
 * @param {*} root 
 * @param {*} height 
 */
function findMinValue(root) {
    let least = 0;
    if (root.left) {
        least = findMinValue(root.left);
    } else {
        least = root.value
    }
    return least;
}

module.exports = { findMinValue }

let tree = create.createBinaryTree([11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31])
let maxValue = findMinValue(tree)
console.log(maxValue);