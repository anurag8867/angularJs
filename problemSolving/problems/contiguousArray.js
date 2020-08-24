function removeKeyFromArray(longestArray) {
    let leftArray = null, rightArray = null, splittedArray = null;
    for (let key in longestArray) {
        // leftArray = longestArray[key].slice(0, longestArray[key].indexOf(key))
        // rightArray = longestArray[key].slice(longestArray[key].indexOf(parseInt(key)))


        // splittedArray = longestArray[key].split(15)
        for (let index = 0; index < longestArray[key].length; index++) {
            if (longestArray[key][index] === parseInt(key)) {
                leftArray = [...longestArray[key].slice(index, 1), ...longestArray[key].slice(index + 2)]
            }
        }
    }
    return leftArray;
}

function findLongest(obj) {
    let longestArray = null, longestArrayKey = null;
    for (let key in obj) {
        obj[key].forEach(function (value) {
            if (longestArray === null || (longestArray.length < value.length)) {
                longestArray = value;
                longestArrayKey = key
            }
        })
    }
    return { [longestArrayKey]: longestArray }
}

function contiguousArray(array) {
    let obj = {};
    let tempArray = [];
    let sumEqualToZero = {};
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        tempArray.push(array[index]);
        sum += array[index];
        if (obj[sum] || obj[sum] === 0) {
            if (!sumEqualToZero[sum]) {
                sumEqualToZero[sum] = [JSON.parse(JSON.stringify(tempArray))]
            } else {
                sumEqualToZero[sum].push(JSON.parse(JSON.stringify(tempArray)))
            }
        } else {
            obj[sum] = sum
        }
    }
    let longestArrayKeyPair = findLongest(sumEqualToZero);
    let longestArray = removeKeyFromArray(longestArrayKeyPair)
    return longestArray;
}

console.log(contiguousArray([15, -2, 2, -8, 1, 7, 1, -1]));