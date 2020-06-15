/**
 * O(n)
 * O(n)
 */
function findByHashing(array, sum) {
    if (!sum) return false;
    let obj = {}, requiredSum = -1;
    for (let index = 0; index < array.length; index++) {
        requiredSum = sum - array[index];
        if (!obj.hasOwnProperty(requiredSum)) {
            obj[array[index]] = index;
            continue;
        }
        return [index, obj[requiredSum]]
    }
    return false;
}
// console.log(findByHashing([1, 2, 3, 4, 5, 6], 6))

/**
 * O(n2)
 * O(1)
 */
function findByBruteForceTechnique(array, sum) {
    for (let index = 0; index < array.length; index++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            if (sum === (array[index] + array[index2])) {
                return [index, index2];
            }

        }
    }
    return false;
}
console.log(findByBruteForceTechnique([1, 2, 3, 4, 5, 6], 6))

/**
 * O(nlogn)
 * O(1)
 */
function findBySorting(array, requiredSum) {
    let sortedArray = array.sort();
    let start = 0, last = array.length - 1;

    while (start < last) {
        let sum = sortedArray[start] + sortedArray[last];
        if (requiredSum === sum) return [start, last]
        requiredSum > sum ? start++ : last--;
    }
    return false;
}
console.log(findBySorting([1, 2, 3, 4, 5, 6], 6));

module.exports = {
    findByHashing
}