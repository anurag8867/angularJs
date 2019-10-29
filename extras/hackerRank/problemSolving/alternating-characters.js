// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let count = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === s[index + 1]) {
      count++;
    }
  }
  return count;
}

console.log(alternatingCharacters('AAAA'));
console.log(alternatingCharacters('BBBBB'));
console.log(alternatingCharacters('ABABABAB'));
console.log(alternatingCharacters('BABABA'));
console.log(alternatingCharacters('AAABBB'));
