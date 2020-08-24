let listRef = null;
function Cell(data) {
    let obj = {};
    obj["data"] = data;
    obj["ref"] = null;
    return obj;
}

function insert(data) {
    let cell = Cell(data);
    if (!listRef) {
        listRef = cell;
    } else {
        let currentRef = listRef
        while (currentRef.ref !== null) {
            currentRef = currentRef.ref
        }
        currentRef.ref = cell
    }
    return listRef;
}

function insertAt(data, index) {
    let cell = Cell(data),
        ind = 0;
    if (!listRef) {
        listRef = cell;
    } else {
        let currentRef = listRef
        while (currentRef.ref !== null && (ind !== index - 1)) {
            ind++;
            currentRef = currentRef.ref
        }
        cell.ref = currentRef.ref
        currentRef.ref = cell
}
    return listRef;
}

function removeElement(element) {
    let ind = 0;
    if (!listRef) {
        return null;
    } else {
        let currentRef = listRef
        while (currentRef.ref.data !== element) {
            ind++;
            currentRef = currentRef.ref
        }
        currentRef.ref = currentRef.ref.ref
    }
    return listRef;
}

function removeFrom(index) {
    let ind = 0;
    if (!listRef) {
        return null;
    } else {
        let currentRef = listRef
        while (currentRef.ref !== null && (ind !== index - 1)) {
            ind++;
            currentRef = currentRef.ref
        }
        currentRef.ref = currentRef.ref.ref
    }
    return listRef;
}

function indexOf(element) {
    let ind = 0;
    if (!listRef) {
        return null;
    } else {
        let currentRef = listRef
        while (currentRef.data !== element) {
            ind++;
            currentRef = currentRef.ref
        }
    }
    return ind;
}

function isEmpty() {
    if (!listRef) {
        return true;
    }
    return false;
}

function printList() {
    while (listRef && listRef.data && listRef.data !== null) {
        // console.log(listRef.data)
        listRef = listRef.ref
    }
}


console.log(isEmpty())
insert(10);
insert(20);
insert(30);
insert(40);
insert(50);
insertAt(25, 2);
insert(22);
removeElement(25);
console.log(isEmpty())
let resp = removeFrom(2);
let index = indexOf(40);
console.log(JSON.stringify(resp));
printList();







