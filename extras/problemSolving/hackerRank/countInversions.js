function sort(arr, ind) {
    let count = 0;
    for (let index = 0; index < ind; index++) {
        if (arr[index] > arr[index + 1]) {
            count++;
            arr[index] = arr[index] + arr[index + 1];
            arr[index + 1] = arr[index] - arr[index + 1];
            arr[index] = arr[index] - arr[index + 1];
        }
        console.log("object")
    }
    return count;
}

function countInversions(arr) {
    let count = 0
    for (let index = 1; index < arr.length; index++) {
        count += sort(arr, index);
        console.log("hello")
    }
}

console.log(countInversions([2, 1, 3, 1, 2]))
console.log(countInversions([1, 1, 1, 2, 2]))