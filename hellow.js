<<<<<<< HEAD
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello CI/CD'))
app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
=======

const http = require('http');


const hostname = '127.0.0.1'; 
const port = 3000; 


const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
>>>>>>> 845160b82de358a014a62709860a04571ee2ed92
