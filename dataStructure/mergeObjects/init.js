let obj1 = {
    a: 'a'
};
let obj2 = {
    b: 'b'
};
let obj3 = {
    c: 'c'
};

function inbuilt() {
    return { ...obj1, ...obj2, ...obj3 };
}

function inbuiltAssign() {
    return Object.assign({}, obj1, obj2, obj3);
}

function custom() {
    for (let key in obj1) {
        obj2[key] = obj1[key]
    }
    for (let key in obj3) {
        obj2[key] = obj3[key]
    }
    return obj2;
}

console.log(inbuilt());
console.log(inbuiltAssign());
console.log(custom());