var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
})

app.use(function(err, req, res, next) {
  console.log('Error on request %s %s', req.method, req.url)
  console.log(err)
  console.log(err.stack)
  res.status(500).send('Internal server error')
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
