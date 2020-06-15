function remove_duplicates(arr) {
  var obj = {};
  var ret_arr = [];
  let x = 0;
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1
    }
  }
  for (var k in obj) {
    ret_arr.push(obj[k]);
  }
  return ret_arr.sort(function (a, b) {
    return b - a;
  });
}

function equalizeArray(arr) {
  let count = 0,
      arrCopy = arr;
  arr = arr.sort();
  let sum = 0;
  let nonDplicateArray = remove_duplicates(arr);
  nonDplicateArray.forEach(function (value, index, array) {
    sum = sum + value;
  });
  return sum - nonDplicateArray[0];
}

console.log(equalizeArray([3, 3, 2, 1, 3]))
console.log(equalizeArray([1, 2, 2, 3]))
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]))
