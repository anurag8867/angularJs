function howManyGames(p, d, m, s) {
  let games = 0;
  if (s - p >= 1) {
    games++;
    s = s - p;
    let costDecrement = p - d;
    while (s >= 0 && costDecrement >= m) {
      s = s - costDecrement;
      costDecrement = costDecrement - d;
      games++;
    }
    if (s / m >= 1) {
      games = games + Math.floor(s / m);
    }
  }
  return games;
}

console.log(howManyGames(20, 3, 6, 85));
console.log(howManyGames(20, 3, 6, 80));
