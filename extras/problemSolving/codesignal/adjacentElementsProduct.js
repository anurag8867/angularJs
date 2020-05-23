function adjacentElementsProduct(array) {
    let ind = 0;
    while (!(array[ind] && array[ind + 1])) {
        ind++;
        if (ind === array.length - 1) return 0;
    }

    let prod = array[ind] * array[ind + 1];
    ind += 1
    for (let index = ind; index < array.length - 1; index++) {
        if (array[index] && array[index + 1]) {
            let mul = array[index] * array[index + 1];
            if (prod < (array[index] * array[index + 1])) prod = mul;
        }
    }
    return prod;
}
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]))
console.log(adjacentElementsProduct([0, 0, 1, 2, 3, 0]))
console.log(adjacentElementsProduct([1, 2, 3, 0]))
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))