function* anurag() {
  yield console.log("first");
  yield console.log("second");
  yield console.log("second");
  yield console.log("second");
  return "done";
}

var gen = anurag();
for (let index = 0; index <= 4; index++) {
  gen.next();
}
