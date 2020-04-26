function almostIncreasingSequence(array) {
    let count = 0;
    let index2 = 0;
    for (let index = 0; index < array.length - 1;) {
        if (array[index2] < array[index + 1]) {
            index++;
            index2 = index;
            continue;
        } else if (index === 0) {
            index2++
        }
        index++
        count++;
        if (count > 1) return false
    }
    if (count > 1) return false
    return true;
}

console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]));
console.log(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]));
console.log(almostIncreasingSequence([1, 1, 2, 3, 4, 4]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([1, 1, 2, 3, 4, 4]));
console.log(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 1]));
