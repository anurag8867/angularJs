function saveThePrisoner(n, m, s) {
  console.time()
  let a = s+m-1;
  if(a>n){
    if(a%n==0){
      return n;
    }
    console.timeEnd()
    return a%n;
  }

  console.timeEnd()
  return a;
}

// console.log(saveThePrisoner(3000000, 2000000, 30000))
console.log(saveThePrisoner(7,9, 12))
console.log(saveThePrisoner(5,2, 1))
