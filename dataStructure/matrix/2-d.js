function mul(a, b) {
    let resp = [], tempProd = 0;
    let row = null;
    for (row = 0; row < a.length; row++) {
        resp[row] = [];
        for (let col = 0; col < a.length; col++) {
            resp[row][col] = 0;
            for (let k = 0; k < b.length; k++) {
                resp[row][col] += a[row][k] * b[k][col];
                console.log(resp);
            }
        }
    }
    return resp;
}

// console.log(mul([[1, 2], [3, 4]], [[5, 6], [7, 8]]));
console.log(mul([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));