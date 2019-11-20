function anuy(flag) {
  if (flag) {
    console.log("@3");
    return "inside flag";
  }
  console.log("@6");
  return "outside flag";
}

console.log(anuy(true));
