function isBeside(firstIndex, secondIndex, thirdIndex, count) {
  if ((firstIndex === secondIndex || firstIndex === thirdIndex) || secondIndex === firstIndex || secondIndex === thirdIndex) {
    return count + 3
  }
  return count + 4;
}

function totalTriplets(capacity, desiredCapacity) {
  let count = 0;
  capacity = capacity.sort(function (a, b) {
    return a - b;
  });

  for (let firstIndex = 0; firstIndex < capacity.length - 2; firstIndex++) {
    for (let secondIndex = 1; secondIndex < capacity.length - 1; secondIndex++) {
      for (let thirdIndex = 2; thirdIndex < capacity.length; thirdIndex++) {
        if (capacity[firstIndex] * capacity[secondIndex] * capacity[thirdIndex] === desiredCapacity) {
          count = isBeside(capacity[firstIndex], capacity[secondIndex], capacity[thirdIndex], count);
        }
      }
    }
  }
  return count;
}

console.log(totalTriplets([1, 2, 2, 2, 4], 8))
