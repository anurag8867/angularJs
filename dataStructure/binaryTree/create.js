let Node = null;

function CreateNode(value) {
    this.left = null
    this.right = null
    this.value = value
}

function insert(tempNode, Node) {
    if (Node === null) {
        Node = tempNode
    } else {
        if (Node.value < tempNode.value) {
            if (!Node.right) {
                Node.right = tempNode
            } else {
                insert(tempNode, Node.right)
            }
        } else {
            if (!Node.left) {
                Node.left = tempNode
            } else {
                insert(tempNode, Node.left)
            }
        }
    }
    return Node;
}

function init(value) {
    let node = new CreateNode(value);
    Node = insert(node, Node)
    return Node;
}

function createBinaryTree(array) {
    array = Array.isArray(array) ? array : [array]
    array.forEach((value) => {
        init(value)
    });
    return Node;
}

module.exports = { createBinaryTree }
