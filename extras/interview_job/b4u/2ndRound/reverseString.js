function reverseString(str) {
  let reversStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reversStr += str[index]
  }
  return reversStr;
}

console.log(reverseString("abababc"));
