const http = require('http');

// Create a simple server
const hostname = '0.0.0.0'; // Use 0.0.0.0 to listen on all network interfaces
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
