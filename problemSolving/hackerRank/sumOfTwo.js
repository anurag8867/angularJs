function sumOfTwo(arr1, arr2, sum) {
    let bObj = {};
    arr2.forEach((value) => {
        bObj[value] = value;
    });
    for (let index = 0; index < arr1.length; index++) {
        let diff = sum - arr1[index];
        if (bObj[diff] !== undefined) {
            return { a: arr1[index], b: diff };
        }
    }
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


console.log(sumOfTwo([1, 2, 3, 4], [10, 20, 30, 40], 42));