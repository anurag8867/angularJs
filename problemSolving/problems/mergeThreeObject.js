let o1 = { a: 'a' };
let o2 = { b: 'b', a: 'a' };
let o3 = { c: 'c' };
function f1() {
    return { ...o1, ...o2, ...o3 };
}

function f2() {
    return Object.assign(o1, o2, o3,);
}

function f3() {
    for (let key in o2) {
        o1[key] = o2[key]
    }
    for (let key in o3) {
        o1[key] = o3[key]
    }

    return o1;
}

console.log(f1());
console.log(f2());
console.log(f3());