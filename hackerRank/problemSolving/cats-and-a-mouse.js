let catAndMouse = function (x, y, z) {
  if (Math.abs(z - y) === Math.abs(z - x)) {
    return 'Mouse C';
  } else {
    if(Math.abs(z-x) > Math.abs(z-y)) {
      return 'Cat B'
    } else {
      return 'Cat A'
    }
  }
}
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
