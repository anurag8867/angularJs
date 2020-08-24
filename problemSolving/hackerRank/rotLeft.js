function rotLeft(a, d) {
  let advArray = [];
  a.forEach(function (value, index, array) {
    advArray.push(a[(index + d) % (a.length)])
  })
  return advArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
console.log(rotLeft([1, 2, 3, 4, 5], 2));
