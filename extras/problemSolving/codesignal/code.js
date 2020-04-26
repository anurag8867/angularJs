
function alternatingSums(array) {
    let sum1 = 0, sum2 = 0;
    for (let index = 0; index < array.length; index++) {
        if (index % 2 !== 0) {
            sum2 += array[index]
        } else {
            sum1 += array[index]
        }
    }
    return [sum1, sum2];
}
function findBiggest(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small < array[index]) small = array[index];
    }
    return small;
}
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
console.log(alternatingSums([50, 60, 60, 45, 70]))
