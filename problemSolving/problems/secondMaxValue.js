/**
 * O(n)
 */
function f1(array) {
    return array.sort()[array.length - 2];
}

/**
 * O(n)
 */
function f2(array) {
    let max1 = null, max2 = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max2) {
            max1 = max2;
            max2 = array[index];
        }
    }
    return max1;
}

console.log(f1([1, 2, 5, 3, 4, 6]));
console.log(f2([1, 2, 5, 3, 4, 6]));