class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null; // head/root element
        this.size = 0; // total number of elements in the list
    }
    add(value) {
        const node = new node(value);
        if (this.head) {
            let pointer = this.head;
            while (this.head.next !== null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        } else {
            this.head = node;
        }
        this.size++;
    }
    insertAt(value, index) {
        if (index > 0 && index > this.size) {
            return false;
        } else {
            const node = new node(value);
            let curIndex = 0, current = this.head, previous = null;
            while (curIndex < index) {
                previous = current
                current = current.next;
                curIndex++;
            }
            node.next = current;
            previous.next = node;
        }
        this.size++;
    }
    removeIndex(value, index) {
        if (this.size === 0) {
            return false;
        }
        if (this.size < index) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let curIndex = 0, current = this.head, previous = null;
            while (curIndex < index) {
                previous = current
                current = current.next;
                curIndex++;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    removeElement(element) {
        if (this.size === 0) {
            return false;
        }
        let curIndex = 0, current = this.head, previous = null;
        while (current !== null) {
            if (current.data === element) {
                if (previous === null) {
                    this.head = this.head.next;
                } else {
                    previous.next = current.next;
                }
                this.head = current.next;
                this.size--;
            } else {
                previous = current
                current = current.next
                curIndex++;
            }
        }
    }
}