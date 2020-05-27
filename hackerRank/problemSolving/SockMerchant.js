let n = 9,
    sock = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Complete the sockMerchant function below.
let sockMerchant = function (n, ar) {
  let sockObj = {}, size = 0;
  if (n) {
    ar.forEach(function (sock) {
      sockObj[sock] = 0;
    });
    ar.forEach(function (sock) {
      let value = sockObj[sock];
      sockObj[sock] = ++value;
    });
    Object.keys(sockObj).forEach(function (element) {
      size += parseInt(sockObj[element] / 2);
    });
  }
  return size;
}
console.log(sockMerchant(n, sock));
