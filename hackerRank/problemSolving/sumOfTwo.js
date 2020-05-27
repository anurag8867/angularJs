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

console.log(sumOfTwo([1, 2, 3, 4], [10, 20, 30, 40], 42));