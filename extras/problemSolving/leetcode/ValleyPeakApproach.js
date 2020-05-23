function ValleyPeakApproach(array) {
    if (array[0] === 0 || array[0] > array.length) return false;
    let sum = array[0];
    let index = 0;
    while (sum <= array.length - 1) {
        index += array[index];
        sum += array[index];
        if (sum === array.length - 1) return true;
        if (array[sum] === 0 || sum > array.length - 1) break;
    }
    return false;
}

console.log(ValleyPeakApproach([1, 1, 2, 5, 2, 1, 0, 0, 1, 3]))
console.log(ValleyPeakApproach([1, 1, 2, 3, 2, 1, 0, 0, 2, 2, 3]))
console.log(ValleyPeakApproach([1, 3, 2, 0, 2, 3]))
console.log(ValleyPeakApproach([1, 3, 2, 0, 2]))
console.log(ValleyPeakApproach([1, 2, 1, 0, 2]))