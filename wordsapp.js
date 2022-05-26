const http = require("http");
server = http.createServer((req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      return handleGetRequest(req, res);
    default:
      throw new Error("Unsupported");
  }
});

server.listen(4000, () => {
  console.log("Listening on http://localhost:" + server.address().port);
});
const handleGetRequest = (req, res) => {
  // configuration that contains details about the the request
  const options = {
    hostname: "random-word-api.herokuapp.com",
    // gets one word from the API
    path: "/word?number=1",
    headers: { "Content-type": "application/json" },
  };
  // callback handles the response passed into it
  const request = http.request(options, (response) => {
    var str = "";
    /* data comes in as "chunks"
    For each time the "data" event is emitted (data is available for the "consumer"/server), concact it to the string
    */
    response.on("data", function (chunk) {
      str += chunk;
    });
    // Once the 'end' event is emitted: No more data to be transferred()
    response.on("end", () => {
      res.end(str);
    });
  });
  request.end();
};
