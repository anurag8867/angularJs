class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
class LinkedList {
    constructor() {
        this.first = null; // head/root element
        this.last = null; // last element of the list
        this.size = 0; // total number of elements in the list
    }

    addFirst(value) {
        const node = new node(value);
        node.next = this.first
        if (this.first) {
            this.first.previous = node;
        } else {
            this.last = node;
        }
        this.first = node;
        this.size++;
    }

    removeFirst(value) {
        if (!this.size) {
            return false;
        }
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.first.previous = null;
        }
        this.size--;
    }

    addLast(value) {
        const node = new node(value);
        if (this.first) {
            let pointer = this.head;
            while (this.head.next !== null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        } else {
            this.first = node;
        }
        this.size++;
    }

    removeLast(value) {
        const node = new node(value);
        if (this.first) {
            let pointer = this.head;
            while (this.head.next !== null) {
                pointer = pointer.next;
            }
            pointer.next = node;
        } else {
            this.first = node;
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