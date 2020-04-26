function findSmallest(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small > array[index]) small = array[index];
    }
    return small;
}

function findBiggest(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small < array[index]) small = array[index];
    }
    return small;
}
function getObj(array) {
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        obj[array[index]] = true;
    }
    return obj;
}
function makeArrayConsecutive2(statues) {
    let small = findSmallest(statues)
    let big = findBiggest(statues)
    let count = 0;
    let obj = getObj(statues);
    for (let index = small; index <= big; index++) {
        if (!obj[index]) count++;
    }
    return count;
}
console.log(makeArrayConsecutive2([0,  3]))
console.log(makeArrayConsecutive2([6,  3]))
console.log(makeArrayConsecutive2([6, 2, 3, 8]))