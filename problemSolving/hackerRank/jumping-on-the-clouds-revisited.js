function jumpingOnClouds(c, k) {
  let power = 100, index = 0;
  do {
    power = c[index] === 1 ? power - 3 : power - 1;
    index = (index + k) % c.length;
  }
  while (index !== 0);
  return power;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
console.log(jumpingOnClouds([0, 0, 1, 0], 2));
