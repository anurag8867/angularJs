function extraLongFactorials(n) {
  // if (n==0 || n==1){
  //   return 1;
  // }
  // return extraLongFactorials(n-1)*n;
  var z = n + 1;
  var p = [1.000000000190015, 76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 1.208650973866179E-3, -5.395239384953E-6];

  var d1 = Math.sqrt(2 * Math.PI) / z;
  var d2 = p[0];

  for (var i = 1; i <= 6; ++i)
    d2 += p[i] / (z + i);

  var d3 = Math.pow((z + 5.5), (z + 0.5));
  var d4 = Math.exp(-(z + 5.5));

  d = d1 * d2 * d3 * d4;

  return d;
}
console.log(extraLongFactorials(10))
console.log(extraLongFactorials(25))
