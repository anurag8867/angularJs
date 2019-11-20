function myFunc(total, index, array) {
  console.log(total, index, array);
  return total * total +" " + this.firstName;
}

console.log([2, 3, 4, 5].map(myFunc, {"firstName" : "anurag"}));
