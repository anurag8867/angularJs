function secondLargest(arr) {
  let largest = 0, secondLargest = 0;

  for (let index = 0; index < arr.length; index++) {
    if (largest < arr[index]) {
      secondLargest = largest;
      largest = arr[index];
    }
  }
  return secondLargest;
}

console.log(secondLargest([1, 4, 5, 6]));
