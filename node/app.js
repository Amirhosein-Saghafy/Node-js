const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;
  res.writeHead(200, { "content-type": "text/plain" });
  if (url === "node") {
    res.end("Hello world from node route!");
  }
  
  res.end('Hellow world');
});

server.listen(3000, () => {
  console.log("server is running on port 3000 ...");
});
