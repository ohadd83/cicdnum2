const http = require('http');

http.createServer((req, res) => {
  res.end("Hello Jenkins CI/CD lets move on ");
}).listen(3000);

