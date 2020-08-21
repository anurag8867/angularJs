function magnet(array, sum = 0) {
    if (!array || !array.length || array.length === 1) return sum;
    array.sort((a, b) => a - b);
    let tempSum = array[0] + array[1];
    sum += tempSum;
    array[1] = tempSum;
    array.shift();
    sum = magnet(array, sum)
    return sum;
}
console.log(magnet([5, 7, 10, 11], 0));
console.log(magnet([2, 3, 8, 9], 0));