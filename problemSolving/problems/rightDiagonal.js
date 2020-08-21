function rightDiagonal(array) {
    let out = [];
    array.forEach((value, index, array) => {
        value.forEach((val, ind, arr) => {
            if (index + ind === 3) out.push(val);
        });
    });
    return out;
}

console.log(rightDiagonal([
    [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16],
]))