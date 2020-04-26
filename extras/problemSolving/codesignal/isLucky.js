function getSum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += parseInt(array[index]);
    }
    return sum;
}

function isLucky(n) {
    n = n.toString();
    let left = getSum(n.substring(0, n.length / 2));
    let right = getSum(n.substring(n.length / 2));
    return left === right ? true : false;
}

console.log(isLucky(10));
console.log(isLucky(1230));