var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/files', express.static('public'));

app.get('/data', function (req, res) {
	var fs = require('fs');
	var obj;
	fs.readFile('data.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  res.send(obj);
	});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  var url = 'http://localhost:' + port;
  console.log('Mock Server runs on ' + url);
  console.log('========================================');
  console.log('');
  console.log('get data: ' + url + '/data');
  console.log('get files: ' + url + '/files/b.jpeg');
  
});