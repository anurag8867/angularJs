function create_unique_object(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
}

function isValid(s) {
  if (!s.length) {
    return "NO";
  }
  s = s.split("").sort();
  let obj = create_unique_object(s);
  for (let index = 0; index < s.length; index++) {
    obj[s[index]] = obj[s[index]] + 1;
  }
  let tempArray = Object.values(obj).sort();
  if (tempArray[tempArray.length - 1] - tempArray[0] > 1) {
    return "NO";
  } else if (tempArray[tempArray.length - 1]  === tempArray[0]) {
    return "YES";
  } else {
    tempArray[tempArray.length - 1] = tempArray[tempArray.length - 1] - 1;
    if (tempArray.length > 1) {
      if ((tempArray[tempArray.length - 1] === tempArray[0]) && (tempArray[tempArray.length - 1] === tempArray[tempArray.length - 2])) {
        return "YES";
      }
    } else {
      if ((tempArray[tempArray.length - 1] === tempArray[0])) {
        return "YES";
      }
    }
  }
  return "NO";
}

console.log(isValid("ccdddeefff"));
console.log(isValid("abcd"));
console.log(isValid("abbac"));
console.log(isValid("aaaaabb"));
console.log(isValid("aaaabb"));
console.log(isValid("aabbccddeefghi"));
console.log(isValid("abcdefghhgfedecba"));
