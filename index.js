const http = require('http');
const request = require('request');

// Make request over ssh tunnel
const requestListener = function (req, res) {
  request('http://docker.for.mac.localhost:8081', function (err, response) {
    if (err) {
      res.writeHead(404);
      res.end("Failed to connect remote server");
      return
    }

    res.writeHead(200);
    res.end(response.body);
  });
}

const server = http.createServer(requestListener);
server.listen(8080);