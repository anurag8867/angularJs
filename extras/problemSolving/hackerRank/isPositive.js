function isPositive(a) {
    if(a > 0) {
        return "YES";
    } else {
        if(a === 0) {
            throw new Error("Zero Error")
        } else{
            throw new Error("Negative Error")
        }
    }
}

console.log(isPositive(0));
console.log(isPositive(1));
console.log(isPositive(2));
console.log(isPositive(3));
console.log(isPositive(6));