// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let minScore = 0;
  let maxScore = 0;
  let minScoreBreak = 0;
  let maxScoreBreak = 0;
  scores.forEach(function (value, index, array) {
    if (index === 0) {
      minScore = value;
      maxScore = value;
    } else {
      if (value > maxScore) {
        maxScore = value;
        maxScoreBreak++;
      } else if (value < minScore) {
        minScore = value;
        minScoreBreak++;
      }
    }
  })
return [maxScoreBreak, minScoreBreak];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
