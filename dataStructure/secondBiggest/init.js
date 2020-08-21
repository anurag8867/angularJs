/**
 * O(n)
 * @param {} ar 
 */
function sort(ar) {
    ar.sort();
    return ar[ar.length - 2];
}

/**
 * O(n)
 * @param {} ar 
 */
function sortPop(ar) {
    ar.sort();
    ar.pop();
    return ar.pop();
}

/**
 * O(n)
 * @param {} ar 
 */
function custom(array) {
    let big = null, secondBig = null;
    for (let index = 0; index < array.length; index++) {
        if (!big || array[index] > big) {
            secondBig = big;
            big = array[index];
        } else if (array[index] < big && secondBig < array[index]) {
            secondBig = array[index];
        }
    }
    return secondBig;
}


console.log(custom([2, 3, 1, 4, 5, 9, 0]))
console.log(sort([2, 3, 1, 4, 5, 9, 0]))
console.log(sortPop([2, 3, 1, 4, 5, 9, 0]))