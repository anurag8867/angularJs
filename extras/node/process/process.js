function hello() {
  for (let index = 0; index < 2; index++) {
    console.log(index);
    setTimeout(function () {
      console.log("asdsdsd");
    }, 3000);
  }
}

async function start() {
  console.log(process.cpuUsage(), "@11");
  await hello();
  console.log(process.cpuUsage(), "@13");
}

// start();
console.log(process.debugPort);
console.log(process.disconnect());
