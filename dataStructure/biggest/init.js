/**
 * O(n)
 * @param {} ar 
 */
function sort(ar) {
    ar.sort();
    return ar[ar.length - 1];
}

/**
 * O(n)
 * @param {} ar 
 */
function sortPop(ar) {
    ar.sort();
    return ar.pop();
}

/**
 * O(n)
 * @param {} ar 
 */
function custom(array) {
    let big = null;
    for (let index = 0; index < array.length; index++) {
        if (!big || array[index] > big) big = array[index]
    }
    return big;
}


console.log(custom([2, 3, 1, 4, 5, 9, 0]))
console.log(pop([2, 3, 1, 4, 5, 9, 0]))
console.log(sortPop([2, 3, 1, 4, 5, 9, 0]))