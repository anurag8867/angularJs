function twoSum(array, sum) {
    let obj = {};
    let diff = 0;
    let resp = [];
    array.find((value, index) => {
        diff = sum - value;
        if (obj.hasOwnProperty(value)) {
            resp = [index, obj[value]];
        } else {
            obj[diff] = index;
        }
    });
    return resp;
}

function threeSum(array, sum) {
    array.sort((a, b) => a - b);
    let resp = [];
    array.forEach((value, index, arr) => {
        if (index === 0 || (index > 0 && arr[index] !== arr[index - 1])) {
            let twoSumResponse = twoSum([...arr.slice(0, index), ...arr.slice(index + 1)], sum - value);
            resp.push(...twoSumResponse.map((val) => [value, ...val]));
        }
    });
    return resp;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 2, 3, 4], 7));
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
// console.log(threeSum([1, 2, 3, 4, 5, 6], 9));