function utopianTree(n) {
  n++;
  let treeLength = 1, tempN = 1;
  while (n > tempN) {
    if (tempN % 2 === 0) {
      treeLength++;
    } else {
      treeLength = treeLength * 2;
    }
    tempN++;
  }
  return treeLength;
}

// console.log(utopianTree(0));
// console.log(utopianTree(1));
// console.log(utopianTree(2));
// console.log(utopianTree(3));
console.log(utopianTree(4));
// console.log(utopianTree(5));
