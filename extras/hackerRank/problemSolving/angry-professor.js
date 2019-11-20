function angryProfessor(k, a) {
  let output = 0;
  a.forEach(function (element) {
    if (element === 0 || element < 0) {
      output++;
    }
  })
  if (output > k || output === k) {
    return 'NO';
  } else {
    return 'YES';
  }
  return 'YES';
}

console.log(angryProfessor(3, [-1, -3, 4, 2]))
console.log(angryProfessor(2, [0, -1, 2, 1]))
console.log(angryProfessor(2, [0, -1, 0, 2, 1]))
