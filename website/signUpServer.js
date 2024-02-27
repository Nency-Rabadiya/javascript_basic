const http = require("http");
const users = [{
  username: "nency", password: '123456789', email: "nency@gmail.com"
}];
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
  // Parse the request URL
  const url = new URL(req.url, `http://${req.headers.host}`);
  // Check the path of the URL and handle different routes
  if (url.pathname === "/") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }
    // Handle the root route
    else if (req.url.pathname === "/login" && req.method === "POST") {
      let body = '';
      req.on('data', userData => {
        body += userData.toString();
      });
      req.on('end', () => {
        const userData = JSON.parse(body);

        const getUser = users.find(
          u => u.username === userData.username && u.password === userData.password
        );
        if (getUser) {
          res.writeHead(200, { "Location": "/success.html" });
          res.end(JSON.stringify({ success: true, message: "Login successful" }));
        } else {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Invalid credentials" }));
        }
      });
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(users));
  } else if (req.method === "POST" && req.url === "/signup") {
    let body = '';
    req.on('data', userData => {
      body += userData.toString();
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log('JSON.stringify(newUser)...', JSON.stringify(newUser));
      // res.end(JSON.stringify({ success: true, message: "sign up successful" }));
      // res.end(JSON.stringify(newUser));
    });
  }
  else if (req.method === "GET" && req.url === "/getdata") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(signUpData))
  }
  else {
    // Handle unknown routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

