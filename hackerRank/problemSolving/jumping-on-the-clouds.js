// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumps = 0;
  for (let index = 0; index <= c.length-1;) {
    if (c[index + 2] === 0) {
      index = index + 2;
    } else {
      index++;
    }
    jumps++;
  }

  return jumps-1;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))
