const http = require("http");
const PORT = 3000;
const users = [
  { id: 1, name: 'Alice', phoneNumber: '1234567890', address: '123 Main St, City' },
  { id: 2, name: 'Bob', phoneNumber: '9876543210', address: '456 Elm St, Town' },
  { id: 3, name: 'Alen', phoneNumber: '8576543210', address: '205 Egmj St, Town' }
];
const server = http.createServer((req, res) => {
  // Parse the request URL
  const url = new URL(req.url, `http://${req.headers.host}`);
  // Check the path of the URL and handle different routes
  if (url.pathname === "/") {
    // Handle the root route
    if (req.method === "GET") {
      //get user from id
      const idParam = url.searchParams.get("id");
      if (idParam) {
        const id = users.find(u => u.id === parseInt(idParam));
        if (id) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(id));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("user not found\n");
        }
      }
      //get user from name
      const name = url.searchParams.get("name");
      if (name) {
        const namee = users.find(u => u.name === name);
        if (namee) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(namee));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("user not found\n");
        }
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
      }
    }
    else if (req.method === "POST") {
      let body = '';
      req.on('data', userData => {
        body += userData.toString();
      });
      req.on('end', () => {
        const newUser = JSON.parse(body);

        //validation for exact 4 field.
        const allowedKeys = ['id', 'name', 'phoneNumber', 'address'];
        const isValid = Object.keys(newUser).every(key => allowedKeys.includes(key));

        //validation for 10 digit phone number.
        const phoneRegex = /^\d{10}$/;
        const isPhoneNumberValid = phoneRegex.test(newUser.phoneNumber);

        //validation for not having same id
        const isIdUnique = !users.some(user => user.id === newUser.id);

        if (!isValid) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Invalid user data. Please provide name, phoneNumber, id, and address.");
          return;
        } else if (!isPhoneNumberValid) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Please provide  phoneNumber (10 digits).");
          return;
        } else if (!isIdUnique) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("This Id is already taken.");
          return;
        }

        users.push(newUser);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
      });
    }
  } else {
    // Handle unknown routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
