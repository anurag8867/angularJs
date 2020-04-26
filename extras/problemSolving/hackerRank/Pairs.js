// Complete the pairs function below.
function pairs(k, arr) {
    let pairs = 0;
    let array = arr.sort((a, b) => a - b)
    for (let index = 0; index < array.length - 1; index++) {
        for (let index1 = index + 1; index1 < array.length; index1++) {
            let diff = Math.abs(array[index] - array[index1]);
            if (diff === k) {
                pairs++;
            } else if (diff > k) {
                break;
            }
        }
    }
    return pairs;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));