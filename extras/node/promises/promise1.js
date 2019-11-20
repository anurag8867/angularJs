function hello() {
  var aPromise = new Promise(function (resolve, reject) {
    resolve({"firstname": "anurag", "lastname": "Sandhu"});
  });
  return aPromise;
}
function hello2(resp) {
  resp["firstname"] = "Anurag";
  var aPromise = new Promise(function (resolve, reject) {
    resolve(resp);
  });
  return aPromise;
}
function hello3(resp) {
  resp["lastname"] = "SandhuSaab";
  var aPromise = new Promise(function (resolve, reject) {
    resolve(resp);
  });
  return aPromise;
}

hello().then(function (resp) {
  console.log(resp);
  return hello2(resp);
}, function (error) {
  console.log(error);
}).then(function (resp2) {
  console.log(resp2);
  return hello3(resp2);
}, function (error2) {
  console.log(error2);
}).then(function (resp3) {
  console.log(resp3);
}, function (error3) {
  console.log(error3);
});
