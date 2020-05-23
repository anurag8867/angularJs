// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 != y2 && y1 > y2) {
    return 10000;
  }
  if (y1 < y2) {
    return 0;
  }
  if (m1 != m2 && m1 > m2) {
    return 500 * (m1 - m2);
  }
  if (m1 < m2) {
    return 0;
  }
  if (d1 != d2 && d1 > d2) {
    return 15 * (d1 - d2);
  }
  if (d1 < d2) {
    return 0;
  }
  return 0;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015))
console.log(libraryFine(1, 12, 2017, 1, 1, 2017))
console.log(libraryFine(1, 12, 2017, 1, 1, 2017))
console.log(libraryFine(2, 7, 1014, 1, 1, 1015))
