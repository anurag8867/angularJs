function minimumDistances(a) {
  let min = 100000;
  for (let index = 0; index < a.length - 1; index++) {
    for (let index2 = index + 1; index2 < a.length; index2++) {
      if (a[index] === a[index2] && (index2 - index) < min) {
        min = index2 - index;
      }
    }
  }

  return min == 100000 ? -1 : min;
}

console.log(minimumDistances([3, 2, 1, 2, 3]))
console.log(minimumDistances([1, 2, 3, 4, 10]))
console.log(minimumDistances([7, 1, 3, 4, 1, 7]))
