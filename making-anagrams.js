function makeAnagram(a, b) {
  let sArray = a.split('').sort();
  let bArray = b.split('').sort();
  let count = 0, totalLength = sArray.length + bArray.length;

  for (let index = 0; index < sArray.length;) {
    let matched = false;
    for (let index2 = 0; index2 < bArray.length; index2++) {
      if (sArray[index] === bArray[index2]) {
        sArray.splice(index, 1);
        bArray.splice(index2, 1);
        matched = true;
        // count = count - 2;
        break;
      }
    }
    if (matched) {
      count = count + 2;
    } else {
      index++;
    }
  }
  return totalLength - count;
}

console.log(makeAnagram('ahmnosw', 'amnow'))
console.log(makeAnagram('cde', 'abc'))
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
console.log(makeAnagram('anurag', 'garuna'))
console.log(makeAnagram('anu', 'garuna'))
