function remove_duplicates(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  for (var key in obj) {
    ret_arr.push(parseInt(key));
  }
  return ret_arr;
}

function cutTheSticks(arr) {
  // let copyArray = arr.sort();
  // arr = arr.sort();
  // let tempArray = [];
  //
  // for (let index = 0; index < arr.length; index++) {
  //   let count = 0;
  //   let minus = 0;
  //   if (arr[index] !== 0) {
  //     minus = arr[index];
  //     for (let index2 = 0; index2 < arr.length; index2++) {
  //       if (arr[index2] !== 0) {
  //         arr[index2] = arr[index2] - minus;
  //         count++
  //       }
  //     }
  //     tempArray.push(count);
  //   }
  // }
  // let returnArray = remove_duplicates(tempArray).sort(function (a, b) {
  //   return b - a;
  // });
  // return returnArray;


  arr.sort((a, b) => {
    return a-b;
  })
  let i = 0;
  let result = []

  while (i < arr.length) {
    result.push(arr.length - i);
    while (arr[i] === arr[i + 1]) {
      i++;
    }
    i++;
  }
  return result;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
