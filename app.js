const express = require('express');
const q = require('/home/springrole/projects/angularJs/ts/asyncEachSeries.js');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  q.getData2();
});



function hello() {
  process.exit(1);
}
process.on('exit', () => {
  console.log("object")
});

process.on('uncaughtException', () => {
  console.log("uncaughtException")
});