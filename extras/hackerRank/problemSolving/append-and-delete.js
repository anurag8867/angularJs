// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
let orgFirstStringArray = s.split("");
let orgSecondStringArray = t.split("");
let orgMoves = k;
let commonArray = [];
let sArray = orgFirstStringArray;
let tArray = orgSecondStringArray;

for (let index = 0; index < sArray.length; index++) {
  if(sArray[index] === tArray[index]) {
    commonArray.push(sArray[index])
  } else {
    break;
  }
}
  let leftStr1 = s.slice(commonArray.length, );
  let leftStr2 = t.slice(commonArray.length, );
  let comStr1 = s.slice(0, commonArray.length);
  let comStr2 = t.slice(0, commonArray.length);
  if((leftStr1.length + leftStr2.length)  === 0) {
    return "Yes";
  }
  if((leftStr1.length + leftStr2.length) > k) {
    return "No";
  }

  return "Yes";
}

// console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
// console.log(appendAndDelete("ashley", "ash", 2));
console.log(appendAndDelete("aba", "aba", 7));
