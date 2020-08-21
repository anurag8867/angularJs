let create = require('./create.js');

function findMaxHeight(root, height = 0) {
    if (!root) return height;
    let leftHeight = findMaxHeight(root.left, height + 1);
    let rightHeight = findMaxHeight(root.right, height + 1)
    return Math.max(leftHeight, rightHeight)
}


module.exports = { findMaxHeight }

// let tree = create.createBinaryTree([5, 3, 10, 1, 4, 15, 16, 5])
// let treeHeight = findMaxHeight(tree)
// console.log(treeHeight);
