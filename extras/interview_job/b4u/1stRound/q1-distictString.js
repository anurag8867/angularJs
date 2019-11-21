function doesSameCharExist(strArray, currentChar, index, tempArray) {
  for (let index = 0; index < tempArray.length; index++) {
    if ((currentChar === tempArray[index])) {
      return true
    }
  }
  return false;
}

function distictString(str) {
  let strArray = str.split(''), tempArray = [], maxlengthArray = [];
  for (let index = 0; index < strArray.length; index++) {
    if (!index) {
      tempArray.push(strArray[index]);
    } else {
      if (!doesSameCharExist(strArray, strArray[index], index, tempArray)) {
        tempArray.push(strArray[index]);
      } else {
        if (index !== strArray.length - 1) {
          maxlengthArray.push(tempArray.length);
          tempArray = [];
          index++;
        }
      }
    }
    if (index === strArray.length - 1) {
      maxlengthArray.push(tempArray.length);
    }
  }
  return maxlengthArray.sort((a, b) => b - a)[0];
}

console.log(distictString("abababc"));
console.log(distictString("abababcde"));
console.log(distictString("abcdeba"));
