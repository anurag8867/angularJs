function shapeArea(n) {
    let init = 1;
    if (n === 1) return init;
    for (let index = 2; index <= n; index++) {
        init += (4 * (index - 1))
    }
    return init;
}
console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));

