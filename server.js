var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// app.use(express.static('/public'));

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   console.log('Example app listening on port 8081!')
})
