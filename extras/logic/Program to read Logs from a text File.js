const fs = require('fs');
let totalLogs, totalLogsJson;
fs.readFile('../../logging/log/error.log', (err, data) => {
  if (err) throw err;
  this.totalLogs = data.toString();
  if (IsJsonString(this.totalLogs)) {
    this.totalLogsJson = JSON.parse(this.totalLogs);
    console.log(this.totalLogsJson[0].message);
    console.log(this.totalLogsJson[0].level);
  } else {
    console.log(splitString(this.totalLogs)[0])
    if (splitString(this.totalLogs)[0].message === undefined) {
      console.log("In IF")
      console.log(toJson(splitString(this.totalLogs)[0]))
      console.log(toJson(splitString(this.totalLogs)[0]).message)
    } else {
      console.log("In Else")
      console.log(((splitString(this.totalLogs))[0]).message)
    }

    if ((toJson(splitString(this.totalLogs))[0]).message === undefined) {
      console.log("In IF")
      console.log(toJson(toJson(splitString(this.totalLogs))[0]).message)
    } else {
      console.log("In Else")
      console.log((toJson(splitString(this.totalLogs))[0]).message)
    }
  }
})

function IsJsonString(str) {
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
