function pro() {
  return new Promise((resolve, reject) => {
    resolve({ message: "can't find job for u"});
  })
}

let resp = pro().then((result) => {
  console.log(result.message), (error) => {
    console.log({ error });
  }
}).catch(error => {
  console.log({ error })

});
// console.log(resp);