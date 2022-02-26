const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>  {
    fs.readFile('data.json', function (error, data)   {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(data);
        return res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}:`);
});

// Elegantlt terminating node.js process
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})