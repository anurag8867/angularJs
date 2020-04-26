function findBiggest(array) {
    let small = array[0].length;
    for (let index = 0; index < array.length; index++) {
        if (small < array[index].length) small = array[index].length;
    }
    return small;
}
function getStars(array) {
    let star = '';
    for (let index = 0; index < array; index++) {
        star += '*'
    }
    return [star];
}

function addBorder(array) {
    let big = findBiggest(array);
    let star = getStars(big + 2);
    let ar = array.map((value) => '*' + value + '*');
    return [...star, ...ar, ...star]
}

console.log(addBorder(["abc",
    "ded"]))