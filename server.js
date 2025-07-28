const hhtp=require('http');
hhtp.createServer((req, res) =>{
    res.writeHead[200, {'content-type': 'text/plain'}];
    res.end('hello world');
}).listen(8080);
console.log('server running at http://localhost:8081/');