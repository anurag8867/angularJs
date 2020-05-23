function firstNonRepeatingCharacter(array) {
    let map = new Map();
    for (let index = 0; index < array.length; index++) {
        if (!map.get(array[index])) {
            map.set(array[index], 1);
        } else {
            map.set(array[index], map.get(array[index]) + 1);
        }
    }
    for (let [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    return false;
}
console.log(firstNonRepeatingCharacter("aadbcb"))
console.log(firstNonRepeatingCharacter("aaacccdeeebfd"))