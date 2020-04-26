function isPlalindrome(s) {
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== s[s.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

function substrCount(n, s) {
  let palin = [];
  for (let index = 0; index < s.length; index++) {
    let substr = s.substring(index);
    if (substr.length > 1) {
      if (isPlalindrome(substr)) {
        palin.push(substr.length);
      }
    }
  }
  return palin.sort(function (a, b) {
    return b - a;
  })[0];
}

console.log(substrCount(4, "amadama"));
