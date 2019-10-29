function taumBday(b, w, bc, wc, z) {
  let cost = 0, ordCost = 0;
  ordCost = b * bc + w * wc;
  if (bc === wc) {
    return ordCost;
  } else {
    let costW = 0, costB = 0;
    if (bc > wc) {
      costW = (b + w) * wc + b * z;
    } else {
      costB = (b + w) * bc + w * z;
    }
    cost = (costB || costW) > ordCost? ordCost : (costB || costW);
  }
  return cost;
}

// console.log(taumBday(3, 5, 3, 4, 1));
// console.log(taumBday(10, 10, 1, 1, 1));
console.log(taumBday(5,9,2,3,4));
console.log(taumBday(3,6,9,1,1));
console.log(taumBday(7,7,4,2,1));
console.log(taumBday(3,3,1,9,2));
