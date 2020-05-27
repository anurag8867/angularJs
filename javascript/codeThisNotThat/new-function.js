var myFunction = new Function('data', 'data = data*data; return data;');
let dat = myFunction("2");
console.log(dat);