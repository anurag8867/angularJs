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

function palindromeRearranging(array) {
    let obj = getObj(array);
    let count = 0;
    for (let key in obj) {
        if (obj[key] % 2 === 1) {
            if (count === 1) return false;
            count++;
        }
    }
    return true;
}
console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"))
console.log(palindromeRearranging("aabb"))