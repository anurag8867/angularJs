function matrixElementsSum(matrix) {
    let obj = {};
    let sum = 0;
    matrix.forEach((value) => {
        value.forEach((val, index) => {
            if (val === 0) {
                obj[index] = true;
            }
            if (!obj.hasOwnProperty(index)) {
                sum += val;
            }
        })
    });
    return sum;
}
console.log(matrixElementsSum([[1, 2, 3, 4, 5]]));
console.log(matrixElementsSum([[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]]));
console.log(matrixElementsSum([[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]]))