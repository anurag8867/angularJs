const fs = require('fs');
let totalLogs, totalLogsJson;
fs.readFile('../../logging/log/error.log', (err, data) => {
  if (err) throw err;
this.totalLogs = data.toString();
  if(IsJsonString(this.totalLogs)) {
    this.totalLogsJson = JSON.parse(this.totalLogs);
    console.log(this.totalLogsJson[0].message);
    console.log(this.totalLogsJson[0].level);
  } else {
    // const text = `{"test": "data", "test1": 123, "foo": "feel me??"}
    // {"test": "data", "test1": 123, "foo": "feel me??"}
    // {"test": "data", "test1": 123, "foo": "feel me??"}`;
    // console.log(text.length)
    // console.log(text[0] = 'a')
    // // console.log(text.length)
    // const arrOfObjs = text.split('\n')
    //     .map(line => JSON.parse(line));
    // console.log(arrOfObjs);
let nextString = "", secondtext = this.totalLogs;
    nextString = '`' + secondtext + '`';
    console.log(JSON.parse(JSON.parse(JSON.stringify(this.totalLogs.split('\n')))[0]).message);
    console.log(JSON.parse(JSON.parse(JSON.stringify(this.totalLogs.split('\n')))[0]).message);
    // console.log(this.totalLogs.split('\n')[0]);
    // console.log(this.totalLogs.split('\n')[0].message);
    // const arrOfObjs = this.totalLogs.split('\n')
    //     .map(line => JSON.parse(line));
    // console.log(arrOfObjs);
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
