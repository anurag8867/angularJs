function findSum(value) {
  var sum = 0;

  while (value > 0 || sum>9) {
    if(value === 0) {
      value = sum;
      sum = 0;
    }
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}


function operation(array) {
  let output = [];
  array.forEach(function (value, index, array) {
    let sum = findSum(Math.pow(value, 5));
    output.push(sum);
  });
  return output;
}

console.log(operation([1,2,3,4,5]));
