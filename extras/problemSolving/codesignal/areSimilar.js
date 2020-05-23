function getObj(array) {
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        if (!obj[array[index]]) {
            obj[array[index]] = 1;
        } else {
            obj[array[index]] = obj[array[index]] + 1;

        }
    }
    return obj;
}

function areSimilar(a, b) {
    let aObj = getObj(a);
    let bObj = getObj(b);
    if (a.length !== b.length) return false;
    if (aObj.length !== bObj.length) return false;
    Object.getOwnPropertyNames(aObj).length;
    for (let index in aObj) {
        if (aObj[index] !== bObj[index]) return false;
    }
    let aSlipped = null;
    let bSlipped = null;
    let count = 0;
    for (let index = 0; index < a.length; index++) {
        if (a[index] !== b[index]) {
            if ((aSlipped !== null && bSlipped !== null) && (aSlipped === b[index] && bSlipped === a[index])) {
                continue;
            } else if (count) {
                return false;
            }
            aSlipped = a[index];
            bSlipped = b[index];
            count++;
        }
    }
    return true;
}
console.log(areSimilar([1, 2, 3],
    [2, 1, 3]));
console.log(areSimilar([4, 6, 3],
    [3, 4, 6]))
console.log(areSimilar([1, 2, 2], [2, 1, 1]))