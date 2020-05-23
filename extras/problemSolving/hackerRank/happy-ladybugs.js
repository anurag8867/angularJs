function create_unique_object(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
}

function happyLadybugs(b) {
  if(b.length === 1 || b.length === 0 ) {
    return "NO";
  }
  let s = b.split("");
  let uniqueObj = create_unique_object(s);
  let keys = Object.keys(uniqueObj);
  if(keys.length === 1) {
    return "YES";
  }
  for (let index = 0; index < s.length; index++) {
    uniqueObj[s[index]] = uniqueObj[s[index]] + 1;
  }
  if(Object.values(uniqueObj).sort()[0]!== 1 && uniqueObj["_"] === 1){
    return "YES";
  }
  return "NO";
  // if(uniqueObj["R"] && uniqueObj["R"] % 2 !== 0 ||uniqueObj["Y"] && uniqueObj["Y"] % 2 !== 0  || uniqueObj["B"] && uniqueObj["B"] % 2 !== 0 ) {
  //   return "NO";
  // }
  // for (let index = 0; index < b.length; index++) {
  //
  // }
}
// console.log(happyLadybugs("X_Y__X"))
// console.log(happyLadybugs("__"))
// console.log(happyLadybugs(""))
console.log(happyLadybugs("B"))
console.log(happyLadybugs("B_RRBR"))
// console.log(happyLadybugs("RBY_YBR"))
