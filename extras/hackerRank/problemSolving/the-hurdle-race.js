function hurdleRace(k, height) {
  height = height.sort(function (a, b) {
    return b - a;
  });
  return ((height[0] - k) > 0) ? (height.shift() - k) : 0;
}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]))
console.log(hurdleRace(4, [1, 6, 3, 5, 2]))
