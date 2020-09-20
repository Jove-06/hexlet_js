const http = require('http');

const server = http.createServer( (req, res) => {


    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('hello');
}).listen(3000, () => console.log('Сервер работает'));