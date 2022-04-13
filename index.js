const http = require('http')
const fs = require('fs')

// open local server to send files to client

var server = http.createServer((req, res) =>{
  var page = fs.readFileSync('builder.html')
  res.end(page)
})

server.listen(8000)

console.log('listening on 8000');
