function arrayChange(array) {
    let count = 0;
    for (let index = 0; index < array.length - 1; index++) {
        if (!(array[index] < array[index + 1])) {
            let add = Math.abs(array[index] - array[index + 1]) + 1
            count += add;
            array[index + 1] = array[index] + 1;
        }
    }
    return count;
}
console.log(arrayChange([-1000, 0, -2, 0]))
console.log(arrayChange([2, 1, 10, 1]))
console.log(arrayChange([1, 1, 1]))
console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))