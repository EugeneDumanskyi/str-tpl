var http = require('http');
var test = require('../');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Avoid string {{str1}}. In addition, you can apply inline number formatting like this: {{str2|2}}\n'
          .tpl({str1:'concatenation', str2: 5.016831}));
}).listen(1337, '127.0.0.1');
