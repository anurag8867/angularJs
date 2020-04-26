function isExist(arr, prevEle, nextEle, r) {
    return prevEle * r === nextEle;
}

function countTriplets(arr, r) {
    console.time();
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let index2 = index + 1; index2 < arr.length; index2++) {
            if (isExist(arr, arr[index], arr[index2], r)) {
                for (let index3 = index2 + 1; index3 < arr.length; index3++) {
                    if (isExist(arr, arr[index2], arr[index3], r)) {
                        count++;
                    }
                }
            }
        }
    }
    console.timeEnd();
    return count;
}

console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));