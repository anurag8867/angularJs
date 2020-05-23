// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {





  let arrayS = s.split("");
  let arrayT = t.split("");
  if ((s.length + t.length) <= k) {
    return "Yes"
  }
  let leftS = "";
  let leftT = "";
  for (let index = 0; (index < t.length || index < s.length); index++) {
    if ((!(arrayS[index] === arrayT[index])) || !arrayS[index] || !arrayT[index]) {
      leftS = s.slice(index);
      leftT = t.slice(index);
      break;
    }
  }

  if (leftS.length === 0 && (leftT.length  % 2 !== 0)) {
    return "No";

  }

  if ((leftS.length + leftT.length) <= k) {
    return "Yes"
  }

  return "No";



}

console.log(appendAndDelete("abcd", "abcdert", 2));
console.log(appendAndDelete("y", "yu", 2));
console.log(appendAndDelete("ashley", "ash", 2));
console.log(appendAndDelete("aba", "aba", 7));
console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
