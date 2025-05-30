const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);  // <-- Add this line
  res.end('PayloadCMS EC2 Test Server is Running 🎉');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
