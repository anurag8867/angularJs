let sum = new Function('a', 'b', `
    let c = a + b;
    let d = a / b;
    let e = a - b;
    let f = a * b;
    return c + d + e + f;`);

console.log((sum(1, 2)))





function sum2(a, b) {
    let c = a + b;
    let d = a / b;
    let e = a - b;
    let f = a * b;
    return c + d + e + f;
}
console.log((sum2(1, 2)))
