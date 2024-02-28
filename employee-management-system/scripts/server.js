const http = require("http");
const users = [{
  username: "nency", email: "nency@gmail.com", password: '123456789'
}];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    // Handle preflight requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE , GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200);
    res.end();
    return;
  }
  
  // eslint-disable-next-line no-unused-vars
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
  // Handle the root route
  else if (req.method === "POST" && req.url === "/login") {
    let body = '';
    req.on('data', userData => {
      body += userData.toString();
    });
    req.on('end', () => {
      const userData = JSON.parse(body);
      const getUser = users.find(
        u => u.username === userData.username && u.password === userData.password
      );
      console.log("dddddddd", getUser);
      if (getUser) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "user Found" }));
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid credentials" }));
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end({ success: true, message: "Login successful" });
    });
  }
  //signUp page block
  else if (req.method === "POST" && req.url === "/signup") {
    let body = '';
    req.on('data', userData => {
      body += userData.toString();
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log('signup success', JSON.stringify(newUser));
      res.end(JSON.stringify({ success: true, message: "sign up successful" }));
    });
  }
  //Delete block
  else if (req.method === "DELETE" && req.url === "/delete") {
    let body = '';
    req.on('data', userData => {
      body += userData.toString();
    });
    req.on('end', () => {
      const dataToDelete = JSON.parse(body);
      const index = users.findIndex(user => user.username === dataToDelete.username && user.email === dataToDelete.email);
      if (index) {
        users.splice(index, 1);
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log("Deleted data successfully..", users);
        res.end(JSON.stringify({ success: true, message: "Delete successful" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "User not found" }));
      }
    });
  }
  // add employee block
  else if (req.method === "POST" && req.url === "/addemployee") {
    let body = '';
    req.on('data', userData => {
      body += userData.toString();
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log('added employee...', JSON.stringify(users));
      res.end(JSON.stringify({ success: true, message: "Added successfully" }));
    });
  }
  //edit data block
  else if (req.method === "PUT" && req.url === "/edit") {
    let body = '';
    req.on('data', userData => {
      body += userData.toString();
    });
    req.on('end', () => {
      const editedData = JSON.parse(body);
      const index = users.findIndex(user => user.username === editedData.username && user.email === editedData.email);
      if (index) {
        // Update the user's details
        users[index] = editedData;
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log("data edited successfully...", users);
        res.end(JSON.stringify({ success: true, message: "Edit successful" }));
      }
      else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "User not found" }));
      }
    });
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

