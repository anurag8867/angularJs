let doublyLinkedList = require('./init');
let length = require('./length');

function printMiddle(list) {
    if (!list) return false
    let len = length.findLength(list);
    let middleIndex = Math.ceil(len / 2);
    let count = 1;
    let currentElement = list
    while (count !== middleIndex) {
        currentElement = currentElement.rightRef
        count++;
    }
    return currentElement.data;

}

let list = doublyLinkedList.insert(10);
list = doublyLinkedList.insert(100);
list = doublyLinkedList.insert(1000);
list = doublyLinkedList.insert(10000);
list = doublyLinkedList.insert(100000);
console.log(printMiddle(list));