class Node {
    constructor(element) {
        this.left = null,
            this.data = element,
            this.right = null
    }
}

class BinarySearch {
    constructor() {
        this.root = null;
        // this.right = null;
    }

    move(pointer, element) {
        if (pointer.data > element) {
            return pointer.left;
        }
        return pointer.right;
    }

    add(element) {
        let node = new Node(element);
        if (this.root === null) {
            this.root = node;
        } else {
            let pointer = this.root;
            const searchTree = pointer => {
                if (pointer.data > element) {
                    if (pointer.left !== null) {
                        return searchTree(pointer.left);
                    } else {
                        pointer.left = node;
                        return this.root;
                    }
                } else {
                    if (pointer.right !== null) {
                        return searchTree(pointer.right);
                    } else {
                        pointer.right = node;
                        return this.root;
                    }
                }
            };
            return searchTree(pointer);
        }
    }

    findMax() {
        let pointer = this.root;
        while (pointer.right !== null) {
            pointer = pointer.right;
        }
        return pointer.data;
    }

    findMin() {
        let pointer = this.root;
        while (pointer.left !== null) {
            pointer = pointer.left;
        }
        return pointer.data;
    }

    find() {
        let pointer = this.root;
        while (pointer.left !== null) {
            pointer = pointer.left;
        }
        return pointer.data;
    }

    addAt(element, index) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let pointer = this.head, nextPointer = null;
            let runInd = 0;
            while (runInd !== (index - 1)) {
                pointer = pointer.next;
                runInd++;
            }
            if (pointer.next) {
                nextPointer = pointer.next;
            }
            pointer.next = node;
            node.prev = pointer;
            node.next = nextPointer;
            nextPointer.prev = node;
        }
        return this.head;
    }

    removeFrom(index) {
        if (this.head === null) {
            this.head = node;
        } else {
            let pointer = this.head, nextPointer = null;
            let runInd = 0;
            while (runInd !== (index - 1)) {
                pointer = pointer.next;
                runInd++;
            }
            if (pointer.next) {
                nextPointer = pointer.next.next;
            }

            pointer.next = nextPointer;
            nextPointer.prev = pointer
        }
        return this.head;
    }

    removeElement(element) {
        let pointer = this.head, nextPointer = null, prevPointer = null;
        let runInd = 0;
        while (pointer.data !== element) {
            prevPointer = pointer;
            pointer = pointer.next;
        }
        if (pointer.next) {
            nextPointer = pointer.next;
        }
        prevPointer.next = nextPointer;
        nextPointer.prev = prevPointer;
        return this.head;
    }
}


let dd = new BinarySearch();
dd.add(20);
dd.add(10);
dd.add(5);
dd.add(11);
dd.add(40);
let result = dd.add(50);
let max = dd.findMax();
let min = dd.findMin();
console.log("HI");
// dd.addAt(44, 3);
// dd.removeFrom(2);
// dd.removeElement(40);
