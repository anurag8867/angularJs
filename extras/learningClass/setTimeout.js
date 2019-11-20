let process = require("process-nextick-args");
setTimeout(function(){
  console.log("SETTIMEOUT");
});
setImmediate(function(){
  console.log("SETIMMEDIATE");
});
process.nextTic
