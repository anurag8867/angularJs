function maximumProductSubarray(ar) {
    let prod = null, max = 0;
    for (let index = 0; index < ar.length; index++) {
        if (prod === null) {
            prod = ar[index];
        } else if (ar[index] * prod > prod) {
            prod = ar[index] * prod;
        } else {
            prod = null
        }
        if (max < prod) {
            max = prod
        }
    }
    return max;
}

console.log(maximumProductSubarray([-2, 0, -1]));
console.log(maximumProductSubarray([2, 3, -2, 4]));