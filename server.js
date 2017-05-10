var http = require("http");
function start() {
  function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    //commit
    response.write("hello word! 5.10 123");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start=start;
