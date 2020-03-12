function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];

    arr.forEach(function (value, index, array) {
        obj[value] = true
    })
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}

function getLess(ele, ar) {
    let ret = [];
    for (let index = 0; index < ar.length; index++) {
        if (Number(ele) >= Number(ar[index])) {
            ret.push(ar[index])
        } else {
            return ret;
        }
    }
    return ret;
}

function getValidIndex(key, ar) {
    let index = ar.indexOf(key);
    if (index >= 0) {
        return ar.length - index;
    }
    return index;
}


// Complete the triplets function below.
function triplets(a, b, c) {
    let count = 0, obj = {};
    a = remove_duplicates(a).sort(function (a, b) {
        return Number(a) - Number(b);
    });
    b = remove_duplicates(b).sort(function (a, b) {
        return Number(a) - Number(b);
    });
    c = remove_duplicates(c).sort(function (a, b) {
        return Number(a) - Number(b);
    });

    let al = [], cl = [];
    for (let q = 0; q < b.length; q++) {
        al = getValidIndex(b[q], a);
        cl = getValidIndex(b[q], c);
        if (al > 0 && cl > 0) {
            count += (al * cl)
        }
    }
    return count;
}


console.log(triplets([3, 5, 7, 1], [7, 5, 9], [7, 9, 11, 13]));
// console.log(triplets([1, 4, 5], [2, 3, 3], [1, 2, 3]));
// console.log(triplets([1, 3, 5, 7], [5, 7, 9], [7, 9, 11, 13]));