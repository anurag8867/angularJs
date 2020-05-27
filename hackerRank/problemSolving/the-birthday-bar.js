// Complete the birthday function below.
function birthday(s, d, m) {
  let possible = 0;
  for (let index = 0; index < s.length - m + 1; index++) {
    let sum = 0;
    for (let i = index; i < m + index; i++) {
      sum += s[i];
    }
    if (sum === d) {
      possible++;
    }
  }
  return possible;
}

// console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([4], 4, 1));
