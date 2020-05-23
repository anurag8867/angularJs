function countingValleys(n, s) {
  let upward = 0, valley = 0, downward = 0, groundTouched = 0;
  for (let index = 0; index < n; index++) {
    if (downward === upward) {
      groundTouched = 0;
    }
    if (s[index] === 'U') {
      upward++;
      downward--;
      groundTouched++;
    } else {
      downward++;
      upward--;
      if (downward > upward && groundTouched === 0) {
        valley++;
      }
      groundTouched++;
    }
  }
  return valley;
}

console.log(countingValleys(8, 'DDUUUUDDDDUUUUDD'))


