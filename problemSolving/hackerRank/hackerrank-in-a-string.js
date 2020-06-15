function isExist(s, hack) {
  let index1 = 0, found = false, count = 0;
  for (let index = 0; (index < hack.length && index1 < s.length); index++) {
    for (; index1 < s.length; index1++) {
      if (s[index1] === hack[index]) {
        count++;
        index1++;
        break;
      }
    }
  }
  if (hack.length === count) {
    return "YES";
  }
  return "NO";
}

function hackerrankInString(s) {
  return isExist(s, "hackerrank");
}



console.log(hackerrankInString("rhackerank"));
console.log(hackerrankInString("knarrekcah"));
console.log(hackerrankInString("hackerrank"));
console.log(hackerrankInString("hackeronek"));
console.log(hackerrankInString("abcdefghijklmnopqrstuvwxyz"));
console.log(hackerrankInString("ahankercka"));
