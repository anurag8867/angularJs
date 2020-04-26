function arrayMaximalAdjacentDifference(array) {
    let small = 0;
    for (let index = 0; index < array.length - 1; index++) {
        if (small < (Math.abs(array[index] - array[index + 1]))) small = Math.abs(array[index] - array[index + 1]);
    }
    return small;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))