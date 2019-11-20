var express = require('express'),
    app = express();

app.use(express.static('./myApp'));

app.use('/', function(req, res, next) {
  res.redirect('/');
});
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(8080);

console.log('Server started on: ' + 8080);
