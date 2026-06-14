import { createServer } from "node:http";
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");

  console.log("Press Ctrl+C to stop the server.");

  console.log("Keeping the server alive...");

  console.log(
    "This is a simple HTTP server that responds with 'Hello World!' to every request.",
  );

  setInterval(() => {
    console.info("Server is still running...");
  }, 5000);
});
