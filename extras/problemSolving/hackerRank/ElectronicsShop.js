let getMoneySpent = function (drives, keyboards, b) {
  let budget = b, costOfKeyboardSelected = 0, costOfDriveSelected = 0, totalCost = 0;
  drives = drives.sort();
  keyboards = keyboards.sort();
  if (budget < (drives[0] + keyboards[0])) {
    return -1;
  } else {
    for (let keyboardIndex = 0; keyboardIndex < keyboards.length; keyboardIndex++) {
      for (let driveIndex = 0; driveIndex < drives.length; driveIndex++) {
        let tempBudget = keyboards[keyboards.length - keyboardIndex - 1] + drives[drives.length - driveIndex - 1];
        if (tempBudget > budget) {
          continue;
        } else {
          costOfKeyboardSelected = keyboards[keyboards.length - keyboardIndex - 1];
          costOfDriveSelected = drives[drives.length - driveIndex - 1];
          if (totalCost < (costOfKeyboardSelected + costOfDriveSelected) && (budget > (costOfKeyboardSelected + costOfDriveSelected) ||
              budget === (costOfKeyboardSelected + costOfDriveSelected))) {
            totalCost = costOfKeyboardSelected + costOfDriveSelected;
          }
        }
      }
    }
    return totalCost
  }
}
console.log(getMoneySpent([3, 1], [5, 2, 8], 9))

