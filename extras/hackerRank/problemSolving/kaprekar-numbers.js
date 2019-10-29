function kaprekarNumbers(p, q) {
  let tempArray = [];
  for (let index = p; index <= q; index++) {
    if (index === 1) {
      tempArray.push(index);
    } else {
      let double = index * index;
      let digits = double.toString().length;
      digits = double.toString().length / 2;
      let leftPart = parseInt(double.toString().substring(0, digits));
      let rightPart = parseInt(double.toString().substring(digits));
      if ((leftPart + rightPart) === index) {
        tempArray.push(index);
      }
    }
  }
  if (tempArray.length) {
    return tempArray;
  }
  return "INVALID RANGE";

}

// let result = kaprekarNumbers(1, 100);
let result = kaprekarNumbers(0, 0);
// let result = kaprekarNumbers(9, 100000);

if(result !==  "INVALID RANGE") {
  console.log(result.join(" "));
} else {
  console.log("INVALID RANGE");
}
