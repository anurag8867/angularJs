function isSorted(arr) {
    let resp = !!arr.reduce((memo, item) => memo && item >= memo && item);
    return resp;
}
function findSmallest(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small > array[index]) small = array[index];
    }
    return small;
}

let operations = 0;
function findNumber(ar) {
    let outputArray = [];
    for (let index = 0; index < ar.length; index++) {
        if (ar[index] > ar[index + 1]) {
            operations++;
            outputArray = [...ar.slice(0, index + 1), ar[index + 1] + ar[index + 2], ...ar.slice(index + 3)];
            break;
        }
    }
    if (!isSorted(outputArray)) {
        findNumber(outputArray, operations)
    }
    return operations;
}

console.log(findNumber([1, 6, 2, 3, 4]))
// console.log(findSmallest([1, 6, 2, 3, 4]))
// console.log(isSorted([1, 2, 3, 4]))