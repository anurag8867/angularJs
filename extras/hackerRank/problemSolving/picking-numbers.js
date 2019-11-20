  function pickingNumbers(a) {
    a = a.sort();
    let numbersPicked = 0, tempArray = [];
    a.forEach(function (element, index, array) {
      if (index === 0) {
        if (index + 1 !== array.length) {
          if (Math.abs(array[index] - array[index + 1]) === 0 || Math.abs(array[index] - array[index + 1]) === 1) {
            tempArray.push(array[index]);
            tempArray.push(array[index + 1]);
          }
        }
      } else {
        if (tempArray.length) {
          if (index + 1 !== array.length) {
            if (Math.abs(array[index] - array[index + 1]) === 0 || Math.abs(array[index] - array[index + 1]) === 1) {
              tempArray.push(array[index + 1]);
            }
          }
        } else {
          if (index + 1 !== array.length) {
            if (Math.abs(array[index] - array[index + 1]) === 0 || Math.abs(array[index] - array[index + 1]) === 1) {
              tempArray.push(array[index]);
              tempArray.push(array[index + 1]);
            }
          }
        }
      }
    })
    numbersPicked = tempArray.length;
    for (let index = 0; index < tempArray.length - 1; index++) {
      if (Math.abs(tempArray[0] - tempArray[tempArray.length - index - 1]) === 0 || Math.abs(tempArray[0] - tempArray[tempArray.length - index - 1]) === 1) {
        break;
      } else {
        numbersPicked--;
      }
    }
    return numbersPicked;
  }

// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
