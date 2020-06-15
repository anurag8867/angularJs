let aa = 90;
function hello(a) {
    return function (b) {
        return b * a;
    }
}

let hel = hello(50)
console.log(hel(5));



aa = 100;
let hel2 = hello(60)
console.log(hel2(5));