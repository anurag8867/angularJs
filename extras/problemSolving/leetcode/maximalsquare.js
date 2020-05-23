function canIncrease(array, row, col, potential = 1) {
    if (array[row + 1] && array[row + 1][col + 1] && array[row][col + 1] && array[row + 1][col]) {
        potential++;
        if (potential > canIncrease(array, ++row, ++col, potential)) return;
        canIncrease(array, ++row, ++col, potential);
    }
    return potential;
}

function maximalsquare(array) {
    let ar = 0;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            if (array[row][col] === 1) {
                let res = canIncrease(array, row, col);
                if (ar < res) ar = res;
            }
        }
    }
    return ar * ar;
}

// console.log(maximalsquare([[1]]));
// console.log(maximalsquare([[1, 1], [1, 1]]));
// console.log(maximalsquare([[1, 1, 1], [1, 1, 1], [1, 1, 1]]));
// console.log(maximalsquare([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]));
console.log(maximalsquare([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]));