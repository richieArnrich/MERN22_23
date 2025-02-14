const http = require("http");
const fs = require("fs");
const path = require("path");

// Employee data
const employees = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve the HTML file
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/script.js") {
    // Serve the client-side JavaScript file
    fs.readFile(path.join(__dirname, "script.js"), (err, data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  } else if (req.url === "/employees") {
    // Serve employee data as JSON
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  } else {
    // Handle 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
