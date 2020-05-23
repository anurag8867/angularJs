function maximumToys(prices, k) {
    let sortPrice = prices.sort((a, b) => a - b);
    let accumulator = 0, arr = [];
    let resp = sortPrice.find((value) => {
        accumulator += value;
        if (accumulator < k) {
            arr.push(value);
        } else {
            return;
        }
    });
    return arr.length;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));