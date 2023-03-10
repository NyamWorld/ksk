var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(3000);
console.log('Server is listening on port 3000');