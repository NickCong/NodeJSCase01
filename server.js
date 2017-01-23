function start() {
  function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("hello word!");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start=start;
