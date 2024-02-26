const http = require("http");
const user = [{ username: "nency" }];
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    // Handle preflight requests
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200);
    res.end();
    return;
  }
  if (req.method === "POST" && req.url === "/signup") {
    let body = "";

    // Listen for data events to accumulate the POST data
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Listen for the end event to process the entire data
    req.on("end", () => {
      // At this point, 'body' contains the complete POST data

      console.log("Received data:", body);
      const newUser = JSON.parse(body);
      user.push(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
      // You can process the data further, e.g., save it to a database

      // Send a response to the client
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data received successfully!");
    });
  } else {
    // Handle other requests or routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

