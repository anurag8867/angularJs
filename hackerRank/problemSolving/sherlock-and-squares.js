function squares(a, b) {
  let size = 0;
  for (let x = 1; x <= 1000000; x++) {
    if (x * x >= a && x * x <= b) {
      size++;
    } else if(x * x > b) {
      break;
    }
  }
  return size;
}

console.log(squares(3, 9));
console.log(squares(17, 24));
