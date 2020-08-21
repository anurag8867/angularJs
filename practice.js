/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function sumOfTwoPartTwo(array, sum) {
    array.sort();
    let len = array.length;
    let leftIndex = 0;
    let rightIndex = len - 1;
    let tempSum = 0;
    while (leftIndex < rightIndex) {
        tempSum = array[leftIndex] + array[rightIndex];
        if (tempSum === sum) {
            return [leftIndex, rightIndex];
        } else if (sum < tempSum) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }
    return false;
}

/**
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
function sumOfTwo(array, sum) {
    let obj = {};
    let requiredSum = null;
    for (let index = 0; index < array.length; index++) {
        requiredSum = sum - array[index]
        if (obj[requiredSum]) {
            return [index, obj[requiredSum]]
        } else {
            obj[array[index]] = index
        }
    }
    return false;
}

console.log(sumOfTwoPartTwo([50, 60, 70, 80], 170));
console.log(sumOfTwoPartTwo([50, 60, 70, 80], 140));
console.log(sumOfTwoPartTwo([50, 60, 70, 80], 130));
console.log(sumOfTwoPartTwo([10, 20, 30, 40], 40));
console.log(sumOfTwo([50, 60, 70, 80], 140));
console.log(sumOfTwo([50, 60, 70, 80], 130));
console.log(sumOfTwo([10, 20, 30, 40], 40));