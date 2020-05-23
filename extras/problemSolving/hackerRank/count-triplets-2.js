function isExist(arr, prevEle, nextEle, r) {
    return prevEle * r === nextEle;
}

function isMore(slicedArray, match) {
    let matches = 0;
    slicedArray.forEach(function (value, index, array) {
        if (value === match) {
            matches++;
        }
    });
    return matches;
}

function countTriplets(arr, r) {
    console.time();
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let index2 = index + 1; index2 < arr.length; index2++) {
            if (isExist(arr, arr[index], arr[index2], r)) {
                for (let index3 = index2 + 1; index3 < arr.length; index3++) {
                    if (isExist(arr, arr[index2], arr[index3], r)) {
                        count += isMore(arr.slice(index3), arr[index3]);
                        break;
                    }
                }
            }
        }
    }
    console.timeEnd();
    return count;
}

console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
// console.log(countTriplets([1, 5, 5, 25, 125], 5));
// console.log(countTriplets([1, 2, 2, 4], 2));