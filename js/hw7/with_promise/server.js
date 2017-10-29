var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(3005);
console.log("runnung on port 3005");
