function removeDuplicatesSet(array) {
    let resp = new Set(array);
    return [...resp];
}

function removeDuplicatesFilter(array) {
    return array.filter((value, index, arr) => arr.indexOf(value) === index);
}

function removeDuplicatesReduce(array) {
    return array.reduce((accumulator, value) => {
        return accumulator.includes(value) ? accumulator : [...accumulator, value];
    }, []);
}
function removeDuplicatesObject(array) {
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        if (!obj[array[index]]) {
            obj[array[index]] = true
        }
    }
    return Object.keys(obj);
}

console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]));
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]));
console.log(removeDuplicatesReduce([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]));
console.log(removeDuplicatesObject([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6])); 