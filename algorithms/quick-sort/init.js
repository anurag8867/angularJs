function swap(array, fromIndex, toIndex,) {
    array[fromIndex] = array[fromIndex] + array[toIndex];
    array[toIndex] = array[fromIndex] - array[toIndex]
    array[fromIndex] = array[fromIndex] - array[toIndex]
}

function partition(array, start, end) {
    let pivot = array[0];
    while (start < end) {
        do {
            start++
        } while (array[start] <= pivot);

        do {
            end--;
        } while (array[end] > pivot);
        if (start < end) swap(array, start, end);
    }
    swap(array, 0, end++)
    return end;
}


function quickSort(array) {
    if (!array || !array.length || !array.length > 1) return array;
    array.push(Infinity);
    let partitionIndex = partition(array, 0, array.length - 1);
    quickSort(array.slice(0, partitionIndex - 1));
    quickSort(array.slice(partitionIndex));
    console.log(array);
}

console.log(quickSort([10, 16, 8, 12, 15, 6, 3, 9, 5]));