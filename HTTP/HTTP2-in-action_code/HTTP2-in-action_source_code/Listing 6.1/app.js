//A simple HTTP/1.1 NodeJS Server which displays the values of some custom HTTP headers
//These headers can be set by an upstream web server
//More intented as a teaching exercise rather than something to use in real life
//Created for the Manning Book "HTTP/2 in Action"
//Available at https://www.manning.com/books/http2-in-action and all good book stores
//This code is given in Chapter 6, Listing 1

'use strict'

const http2 = require('http')

const PORT=3000

const requestHandler = (request, response) => {
  const { headers } = request; 
  console.log('HTTP Version: ' + headers['protocol'])
  console.log('HTTP2 Support: ' + headers['http2'])
  console.log('HTTP2 Push Support: ' + headers['h2push'])
  response.setHeader('Link','</assets/css/common.css>;rel=preload')
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write('<!DOCTYPE html>\n')
  response.write('<html>\n')
  response.write('<head>\n')
  response.write('<link rel="stylesheet" type="text/css" href="/assets/css/common.css">\n')
  response.write('</head>\n')
  response.write('<body>\n')
  response.write('<h1>Test</h1>\n')
  response.write('</body>\n')
  response.write('</html>\n')
  response.end();
}

var server = http.createServer(requestHandler)
server.listen(port)
console.log('Server is listening on ' + port)

