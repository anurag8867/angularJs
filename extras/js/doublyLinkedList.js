class Node {
    constructor(element) {
        this.prev = null,
            this.data = element,
            this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            let pointer = this.head;
            while (pointer.next) {
                pointer = pointer.next;
            }
            pointer.next = node;
            node.prev = pointer;
        }
        return this.head;
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


let dd = new DoublyLinkedList();
dd.add(10);
dd.add(20);
dd.add(30);
dd.add(40);
dd.add(50);
dd.addAt(44, 3);
dd.removeFrom(2);
dd.removeElement(40);
