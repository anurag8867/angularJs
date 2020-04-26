function getObj(array) {
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        obj[array[index]] = array[index];
    }
    return obj;
}
function findBiggest(array) {
    let small = array[0];
    for (let index = 0; index < array.length; index++) {
        if (small < array[index]) small = array[index];
    }
    return small;
}
function findAr(size) {
    let ar = [];
    for (let index = 0; index <= size; index++) {
        ar.push(index)
    }
    return ar;
}
function pushMinusOne(ar, obj) {
    let ar2 = [];
    ar.forEach((value, index, array) => {
        if (index === obj[index]) {
            ar2.push(-1);
        } else {
            ar2.push(index);
        }
    });
    return ar2;
}
function avoidObstacles(array) {
    let obj = getObj(array);
    let big = findBiggest(array);
    let ar = findAr(big);
    let ar2 = pushMinusOne(ar, obj);
    for (let index = 2; index <= big; index++) {
        let isOk = 0;
        if (ar2[index] !== -1) {
            for (let index2 = index; index2 <= big;) {
                if (ar2[index2] === -1) {
                    isOk = 0;
                    break;
                } else {
                    isOk = 1;
                }
                index2 += index;
            }
        }
        if (isOk) return index;
    }
}


console.log(avoidObstacles([5, 3, 6, 7, 9]))