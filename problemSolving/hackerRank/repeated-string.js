function repeatedString(s, n) {
  if (s.length === 1) {
    return n;
  } else {
    if (s.length !== n) {
      while (s.length < n) {
        s = s + s;
      }
      s = s.slice(0, n);
    }
  }
  return s.split("a").length - 1;
}


console.log(repeatedString('abc', 5));
console.log(repeatedString('aba', 10));
console.log(repeatedString('aba', 3));
console.log(repeatedString('a', 1000000000000));
