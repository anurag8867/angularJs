let create = require('./create.js');

/**
 * 
 * @param {*} root 
 * @param {*} height 
 */
function findMaxValue(root, height = 0) {
    let more = 0;
    if (root.right) {
        more = findMaxValue(root.right);
    } else {
        more = root.value
    }
    return more;
}

module.exports = { findMaxValue }

let tree = create.createBinaryTree([11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31])
let maxValue = findMaxValue(tree)
console.log(maxValue);