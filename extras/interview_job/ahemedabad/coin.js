function possibility(availableCoins, sum) {
  if (sum == 0)
  {
    return 1;
  }

  if (sum < 0) {
    return 0;
  }

  if (availableCoins || availableCoins.length <= 0 && sum >= 1) {
    return 0;
  }

  return possibility(availableCoins - 1, sum) + possibility(availableCoins, sum - S[availableCoins - 1]);
}


console.log(possibility(4, [1, 2, 5]));
// console.log(possibility(sum, availableCoins));
