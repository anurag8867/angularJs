// Complete the candies function below.
function candies(n, arr) {
    let canArr = [];
    for (let index = 0; index < arr.length; index++) {
        canArr[index] = 1;
    }
    arr.forEach(function (value, index, array) {
        if (array[index + 1] > array[index]) {
            canArr[index + 1] = canArr[index] + 1;
        }
    });
    for (let index = arr.length - 1; index >= 1; index--) {
        if (arr[index - 1] > arr[index]) {
            canArr[index - 1] = Math.max(canArr[index] + 1, canArr[index - 1]);
        }
    }
    return canArr.reduce((a, b) => a + b, 0);
}

console.log(candies(9, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));