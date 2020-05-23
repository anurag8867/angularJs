const exec = require('child_process').exec;
exec('/home/springrole/projects/angularJs/extras/node/childProcess/exec/example1/my.bash', (err, stdout, stderr) => {
  if (err) {
    console.error({ err, stderr, stdout });
    return;
  }
  console.log({ err, stderr, stdout });
});
