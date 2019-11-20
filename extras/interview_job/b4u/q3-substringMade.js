function isFurtherElementSame(str, orgString, strMap, indexes, tempArray) {
  let subStringLength = indexes + 1;
  for (let index = 0; index < strMap.length - tempArray.length; index++) {
    if (!(strMap[subStringLength + index] === tempArray[index % tempArray.length])) {
      return false
    }
  }
  return true;
}

function isSameElementExist(str, orgString, strMap, index, tempArray) {
  if (!isFurtherElementSame(str, orgString, strMap, index, tempArray)) {
    return false;
  }
  return true;
}

function isRepeating(str) {
  let tempArray = [], biggestStringArray = [], strMap = str.split('');
  for (let index = 0; index < str.length; index++) {
    tempArray.push(str[index]);
    if (index) {
      if (isSameElementExist(str[index], str, strMap, index, tempArray)) {
        if(tempArray.length !== str.length) {
          return tempArray.join("");
        } else {
          return false;
        }
      }
    }
  }
  return false;
}
console.log(isRepeating("abcabcabc"));
console.log(isRepeating("abacabacabac"));
console.log(isRepeating("abddghhjg"));
console.log(isRepeating("abababab"));
console.log(isRepeating("anmolanmolanmolanmolanmolanmolanmolanmol"));
