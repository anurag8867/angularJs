function gcd_two_numbers(x, y) {
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd_two_numbers(12, 13));
console.log(12 * 13 / gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(12, 13));
console.log(9 * 3 / gcd_two_numbers(9, 3));
