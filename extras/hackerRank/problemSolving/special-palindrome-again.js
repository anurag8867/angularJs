// Complete the substrCount function below.
function substrCount(n, s) {
  let count = s.length;

  for (let index = 0; index < s.length; index++) {
    for (let index2 = s.length; index2 > 0; index2--) {
      let substring = s.substring(index, index2)
      if (s[index] === s[index2]) {
        count++;
      }
    }
  }

  // for (let index = 0; index < s.length; index++) {
  //   for (let index2 = 0; index2 < s.length; index2++) {
  //     if(s[index] === s[index2]) {
  //       count++;
  //     }
  //   }
  // }

  return count;
}

console.log(substrCount(4, "aaaa"));
