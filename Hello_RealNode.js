var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let path = q.query;
    let fileLocation;
    switch (path.menu) {
        case '/':
            fileLocation = 'pages/login.html';
            break;
        case 'mahasiswa':
            fileLocation = 'pages/mahasiswa.html';
            break;
        case 'DosenWali':
            fileLocation = 'pages/DosenWali.html';
            break;
        case 'login':
            fileLocation = 'pages/login.html';
            break;
        default:
            fileLocation = 'pages/login.html';
    }
    fileSys.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html' });
            return res.end('404 not found');
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);
        return res.end();
    })
})

server.listen(8000);