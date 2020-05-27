function chocolateFeast(n, c, m) {
  let total = 0, wrapper = 0;
  total = Math.floor(n / c);
  wrapper = total;
  while (wrapper / m >= 1) {
    let choco = Math.floor(wrapper/m);
    total += choco;
    wrapper = wrapper - choco*m + choco;
  }
  return total;
}


console.log(chocolateFeast(43203, 60, 5));
// console.log(chocolateFeast(10, 2, 5));
// console.log(chocolateFeast(12, 4, 4));
// console.log(chocolateFeast(6, 2, 2));
