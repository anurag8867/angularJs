function permutationEquation(p) {
  let tempArray = [];
  for (let index = 1; index <= p.length; index++) {
    for (let index2 = 0; index2 < p.length; index2++) {
      if (index === p[index2]) {
        index2++;
        for (let index3 = 0; index3 < p.length; index3++) {
          if (index2 === p[index3]) {
            index3++;
            tempArray.push(index3);
          }
        }
      }
    }
  }
  return tempArray;
}

console.log(permutationEquation([5, 2, 1, 3, 4]));
console.log(permutationEquation([4, 3, 5, 1, 2]));
console.log(permutationEquation([2, 3, 1]));
