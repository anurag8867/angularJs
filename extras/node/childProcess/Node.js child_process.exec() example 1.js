var fs = require('fs');
const exec = require('child_process').exec;
console.log(__dirname + '/my.sh');
fs.readFile(__dirname + '/my.sh', function(err, data) {
  console.log(data);
});

exec(__dirname + '/my.sh', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
