function findLongestSubarrayBySum(ar, requestedSum) {
    let subArray = [], index = 0, sum = ar[0];
    for (let index2 = index + 1; index2 < ar.length; index2++) {
        sum += ar[index2];
        if (sum === requestedSum) {
            subArray = ar.slice(index, index2 + 1).length > subArray.length ?
                ar.slice(index, index2 + 1) : subArray;
        }
        while (sum > requestedSum) {
            sum -= ar[index];
            index++;
        }
    }
    return subArray;
}

console.log(findLongestSubarrayBySum([1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10], 15))
console.log(findLongestSubarrayBySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15))