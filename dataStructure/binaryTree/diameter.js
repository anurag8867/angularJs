let heightModule = require('./height.js');
let createModule = require('./create.js');

function findDiameter(root) {
    if (!root) return 0;
    const center = heightModule.findMaxHeight(root.left) + heightModule.findMaxHeight(root.right);
    const left = findDiameter(root.left);
    const right = findDiameter(root.right);

    return Math.max(center, left, right);
}


let tree = createModule.createBinaryTree([5, 3, 10, 1, 4, 15, 16, 5])
let treeHeight = findDiameter(tree)
console.log(treeHeight);