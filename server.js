// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('PayloadCMS EC2 Test Server is Running 🎉');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
