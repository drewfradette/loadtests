var http = require('http');

function handleRequest(erquest, response) {
  setTimeout(function() {
    response.end();
  }, 1000);
}

var server = http.createServer(handleRequest);

server.listen(process.env.PORT, function() {
  console.log("Server listening on http://localhost:%s", process.env.PORT);
});
