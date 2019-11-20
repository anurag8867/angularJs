let getMoneySpent = function (drives, keyboards, b) {
  drives = drives.sort(function (a, b) {
    return a - b;
  });
  keyboards = keyboards.sort(function (a, b) {
    return a - b;
  });
  let bestSpentFigure = 0;
  if (drives[0] + keyboards[0] > b) {
    return -1;
  } else {
    drives.forEach(function (driveValue) {
      keyboards.forEach(function (keyboardValue) {
        let totalAmountNeeded = driveValue + keyboardValue;
        if (b >= totalAmountNeeded && bestSpentFigure < totalAmountNeeded) {
          bestSpentFigure = totalAmountNeeded;
        }
      });
    });
    return bestSpentFigure;
  }

};
// console.log(getMoneySpent([1, 3], [2, 5, 8], 10));
// console.log(getMoneySpent([4], [5], 5));
console.log(getMoneySpent([762079, 345956, 946858, 154495, 339846, 25454, 517356, 645968, 378996, 637046, 6712, 340681, 385962, 71729, 791899, 409722, 596124, 311288, 101283, 677274, 847331, 605916, 531205, 364676, 841913, 217942, 580353, 988259, 559815, 454104, 105283, 688430, 167398, 140585, 972245, 485700, 228539, 27543, 977673, 505569, 532033, 964235, 135820, 384294, 99325], [762079, 345956, 946858, 154495, 339846, 25454, 517356, 645968, 378996, 637046, 6712, 340681, 385962, 71729, 791899, 409722, 596124, 311288, 101283, 677274, 847331, 605916, 531205, 364676, 841913, 217942, 580353, 988259, 559815, 454104, 105283, 688430, 167398, 140585, 972245, 485700, 228539, 27543, 977673, 505569, 532033, 964235, 135820, 384294, 99325], 142627));
