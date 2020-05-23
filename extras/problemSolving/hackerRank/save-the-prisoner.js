function saveThePrisoner(prisoners, sweets, seatNumbersStart) {
  console.time();
  let tempObj = {};
  for (let index = 1; index <= prisoners; index++) {
    tempObj[index] = 0;
  }
  for (let index = seatNumbersStart; sweets !==0; index++) {
    if (index >= prisoners) {
      if (sweets) {
        tempObj[index % prisoners] = sweets--
      }
    } else {
      if (sweets) {
        tempObj[index] = sweets--
      }
    }
  }
  let ret = Object.keys(tempObj).filter(function(key) {return tempObj[key] === 1})[0]
  console.timeEnd();
  return parseInt(ret) + 1;
  console.timeEnd();
}

// console.log(saveThePrisoner(3000000, 2000000, 30000))
console.log(saveThePrisoner(5,2, 1))
