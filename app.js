const http = require('http');
var fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-Type' ,'text/plain');
    var testo = fs.readFileSync('index.html','utf8');
    res.write(testo);
    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server running at http://"+hostname+":"+port);
});