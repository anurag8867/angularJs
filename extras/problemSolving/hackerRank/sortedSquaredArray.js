function sortedSquaredArray(array) {
    let firstIndex = 0, lastIndex = array.length - 1, ar = [], index = null;
    while (firstIndex <= lastIndex) {
        if (array[firstIndex] + array[lastIndex] < 0) {
            index = firstIndex;
            firstIndex++;
        } else {
            index = lastIndex;
            lastIndex--;
        }
        ar.unshift(array[index] * array[index]);
    }
    return ar;
}

console.log(sortedSquaredArray([-7, -3, -1, 4, 8, 12]));
console.log(sortedSquaredArray([-6, -4, 1, 2, 3, 5]));