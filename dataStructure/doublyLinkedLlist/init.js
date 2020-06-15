let listRef = null;

class Cell {
    constructor(data) {
        this.leftRef = null
        this.data = data
        this.rightRef = null
    }
}

class doublyLinkedList {
    insert(data) {
        let cell = new Cell(data);
        if (!listRef) {
            listRef = cell;
        } else {
            let currentRef = listRef
            while (currentRef.rightRef !== null) {
                currentRef = currentRef.rightRef
            }
            cell.leftRef = currentRef
            currentRef.rightRef = cell
        }
        return listRef;
    }

    insertAt(data, index) {
        let cell = new Cell(data),
            ind = 0;
        if (!listRef) {
            listRef = cell;
        } else {
            let currentRef = listRef
            while (currentRef.rightRef !== null && (ind !== index - 1)) {
                ind++;
                currentRef = currentRef.rightRef
            }
            cell.rightRef = currentRef.rightRef
            cell.leftRef = currentRef
            currentRef.rightRef.leftRef = cell
            currentRef.rightRef = cell
        }
        return listRef;
    }

    removeElement(element) {
        let ind = 0;
        if (!listRef) {
            return null;
        } else {
            let currentRef = listRef
            while (currentRef.rightRef.data !== element) {
                ind++;
                currentRef = currentRef.rightRef
            }
            let nextElement = currentRef.rightRef.rightRef;
            nextElement.leftRef = currentRef;
            currentRef.rightRef = nextElement;
        }
        return listRef;
    }

    removeFrom(index) {
        let ind = 0;
        if (!listRef) {
            return null;
        } else {
            let currentRef = listRef
            while (currentRef.rightRef !== null && (ind !== index - 1)) {
                ind++;
                currentRef = currentRef.rightRef
            }
            let nextElement = currentRef.rightRef.rightRef
            currentRef.rightRef = nextElement
            nextElement.leftRef = currentRef
        }
        return listRef;
    }

    indexOf(element) {
        let ind = 0;
        if (!listRef) {
            return null;
        } else {
            let currentRef = listRef
            while (currentRef && currentRef.data && currentRef.data !== element) {
                ind++;
                currentRef = currentRef.rightRef
            }
        }
        return ind;
    }

    isEmpty() {
        if (!listRef) {
            return true;
        }
        return false;
    }

    printList() {
        while (listRef && listRef.data && listRef.data !== null) {
            console.log(listRef.data)
            if (!listRef.rightRef) {
                return;
            }
            listRef = listRef.rightRef
        }
    }

}

let list = new doublyLinkedList();
console.log(list.isEmpty())
list.insert(10);
list.insert(20);
list.insert(30);
console.log(list.isEmpty())
list.insert(40);
list.insert(50);
list.insert(60);
list.insert(70);
list.insertAt(66, 4);
list.printList();
let resp = list.indexOf(30);
// list.removeFrom(3);
console.log(resp);