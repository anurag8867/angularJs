function isFactorsOf(num, a) {
  for (let index = 0; index < a.length; index++) {
    if (num % a[index] === 0) {
      continue;
    } else {
      return false
    }
  }
  return true;
}

function isAFactor(num, b) {
  for (let index = 0; index < b.length; index++) {
    if (b[index] % num !== 0) {
      return false;
    }
  }
  return true;
}

function getTotalX(a, b) {
  let ansLength = 0;
  for (let num = a[a.length - 1]; num <= b[0]; num++) {
    let isFact = isFactorsOf(num, a);
    let isAFact = isAFactor(num, b);
    if (isFact && isAFact) {
      ansLength++;
    }
  }
  return ansLength;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([2, 6], [24, 36]))
