function removeDuplicates(arr) {
    let obj = {}, arra = [];
    arr.forEach(function (value, index, array) {
        obj[value] = 1;
    });
    for (let key in obj) {
        arra.push(key);
    }
    return arra;
}

function getSecondLargest(nums) {
    let largest = 0, secondLargest = 0;
    return removeDuplicates(nums).sort(function (a, b) {
        return b - a;
    })[1];
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));