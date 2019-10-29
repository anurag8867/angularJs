function hackerrankInString(s) {
  s = s.toLowerCase();
  s = s.split("").sort();
  let hackerrank = "hackerrank".split("").sort();
  let hackerrankLength = hackerrank.length;
  for (let index = 0; index < hackerrankLength; index++) {
    for (let index2 = 0; index2 < s.length; index2++) {
      if (s[index] === hackerrank[index2]) {
        hackerrank.splice(index2, 1);
        s.splice(index, 1);
        break;
      }
    }
  }
  if (hackerrank.length >1) {
    return "NO"
  }
  return "YES";
}

console.log(hackerrankInString("hereiamstackerrank"));
console.log(hackerrankInString("hackerworld"));
console.log(hackerrankInString("hhaacckkekraraannk"));
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));
