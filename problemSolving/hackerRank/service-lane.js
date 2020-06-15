function serviceLane(n, t, width, cases) {
  let minLengthArray = [];
  for (let index = 0; index < t; index++) {
    minLengthArray.push(width.slice(cases[index][0], cases[index][1]+1).sort()[0])
  }

  return minLengthArray;
}

console.log(serviceLane(8, 5, [2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]).join("\n") + "\n")
console.log(serviceLane(5, 5, [1,2,2,2,1], [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]]).join("\n") + "\n")
