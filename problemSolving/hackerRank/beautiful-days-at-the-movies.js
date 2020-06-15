function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}

function beautifulDays(i, j, k) {
  let beauty = 0;
  for (let index = i; index <= j; index++) {
    if (Math.abs(index - reverse_a_number(index)) % k === 0) {
      beauty++;
    }
  }
  return beauty;
}

console.log(beautifulDays(13, 45, 3));
console.log(beautifulDays(20, 23, 6));
