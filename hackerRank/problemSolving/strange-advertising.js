function viralAdvertising(n) {
let firstElement = 5, liked = 0;
while(n--) {
  liked += parseInt(firstElement / 2);
  firstElement = parseInt(firstElement / 2) * 3;
}
return liked;
}
console.log(viralAdvertising(0));
console.log(viralAdvertising(1));
console.log(viralAdvertising(2));
console.log(viralAdvertising(3));
console.log(viralAdvertising(4));
