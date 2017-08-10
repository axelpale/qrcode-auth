
var router = require('./router');
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var server = http.createServer(app);

app.use('/', express.static(path.resolve(__dirname, '../client')));
app.use('/', router);

server.listen(3000, function () {
  console.log('Listening on port 3000...');
});
