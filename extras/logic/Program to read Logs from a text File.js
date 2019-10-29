const fs = require('fs');
let totalLogs;

function sortLogs(logs, fromDate) {
  let sortLog = [];
  logs.forEach(function (log) {
    if (log.length && toJson(log) && toJson(log).timestamp) {
      log = toJson(log).message
      sortLog.push(log)
    }
  })
  return sortLog;
}

fs.readFile('../../logging/log/error.log', (err, data) => {
  if (err) throw err;
  this.totalLogs = data.toString();
  let fromDate = "2019-08-11";
  if (isJsonAble(this.totalLogs)) {
    this.totalLogs = toJson(this.totalLogs);
    console.log(this.totalLogs[0].message);
    console.log(this.totalLogs[0].level);
  } else {
    if (splitString(this.totalLogs)[0].message === undefined) {
      this.totalLogs = splitString(this.totalLogs)
      console.log(sortLogs(this.totalLogs, fromDate));
    } else {
      console.log("In Else")
      console.log(((splitString(this.totalLogs))[0]).message)
    }

    // if ((toJson(splitString(this.totalLogs))[0]).message === undefined) {
    //   console.log("In IF")
    //   console.log(toJson(toJson(splitString(this.totalLogs))[0]).message)
    // } else {
    //   console.log("In Else")
    //   console.log((toJson(splitString(this.totalLogs))[0]).message)
    // }
  }
})

let isJsonAble = function (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function toJson(str) {
  if (typeof str === "string") {
    return JSON.parse(str)
  } else {
    return str;
  }
}

function toString(json) {
  if (typeof json === "object") {
    return JSON.stringify(json)
  } else {
    return json;
  }
}

function splitString(str) {
  if (typeof str === "string") {
    return str.split('\n');
  } else {
    return str;
  }

}
