const twoNumberSum = require("../twoNumberSum/init.js")

function getSum(array, sum) {
    let obj = {}, requiredSum = -1;
    for (let index = 0; index < array.length; index++) {
        requiredSum = sum - array[index]
        let twoNumSum = twoNumberSum.findByHashing(array.slice(0, index).concat(array.slice(index + 1)),
            requiredSum);
        if (twoNumSum) {
            twoNumSum.forEach((value, ind, arr) => {
                arr[ind] += 1
                console.log("object")
            })
            return [index].concat(twoNumSum)
        }
        if (!obj.hasOwnProperty(requiredSum)) {
            obj[array[index]] = twoNumSum;
        }
    }
    return false
}



console.log(getSum([1, 2, 3, 4, 5, 6], 122))