for (var index = 0; index < 5; index++) {
  (() => {
    setTimeout(function () {
      console.log(index)
    }, 0)
  })(index)
}

for (var index = 0; index < 5; index++) {
  setTimeout(function () {
    console.log(index)
  }, 0)
}

