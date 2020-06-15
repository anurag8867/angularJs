function findMaxSubArray(ar) {
    let currentSum = ar[0], maxSum = ar[0], index = 1;
    while (index < ar.length) {
        currentSum = ar[index] < (currentSum + ar[index]) ? (currentSum + ar[index]) : ar[index];
        if (maxSum < currentSum) maxSum = currentSum;
        index++;
    }
    return maxSum;
}

console.log(findMaxSubArray([-2, 2, 5, -11, 6]));
console.log(findMaxSubArray([-2, 2, 5, -11, 6, 7]));