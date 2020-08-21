function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        let prevIndex = index - 1;
        let currentNumber = array[index];
        while (prevIndex >= 0 && array[prevIndex] > currentNumber) {
            array[prevIndex + 1] = array[prevIndex];
            array[prevIndex] = currentNumber;
            prevIndex--;
        }
        console.log(array);
    }
    return array;
}

console.log(insertionSort([10, 11, 5, 6, 4, 3, 3, 0]));