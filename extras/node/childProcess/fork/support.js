console.log(process.argv, 'process.argv--------------');

process.on('message', (data) => {
  console.log('data---------' ,data, 'data+++++++++++++++')
});

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

process.on('close', (code) => {
  console.log('Process close event with code: ', code);
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});
console.log(process.connected, 'extras/node/childProcess/fork/support.js');

