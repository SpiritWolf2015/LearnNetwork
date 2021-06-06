//A simple HTTP/1.1 HTTPS NodeJS Server which:
// 1) Pushes a static CSS file
// 2) Returns a hardcoded HTML page
//More intented as a teaching exercise rather than something to use in real life
//Created for the Manning Book "HTTP/2 in Action"
//Available at https://www.manning.com/books/http2-in-action and all good book stores
//This code is given in Chapter 5, Listing 3

'use strict'

const fs = require('fs')
const http2 = require('http2')

const PORT=8443

//Create a HTTP/2 server with HTTPS certificate and key
const server = http2.createSecureServer({
  cert: fs.readFileSync('server.crt'),
  key: fs.readFileSync('server.key')
 })

//Handle any incoming streams
server.on('stream', (stream, headers) => {

  //Check if the incoming stream supports Push at the connection level
  if (stream.session.remoteSettings.enablePush) {

      //If it supports Push then push the CSS file
      console.log('Push enabled. Pushing CSS file')

      //Open the File for reading
      const cssFile = fs.openSync('/www/htdocs/assets/css/common.css', 'r')

      //Get some stats on the file for the HTTP response headers
      const cssStat = fs.fstatSync(cssFile)
      const cssRespHeaders = {
         'content-length': cssStat.size,
         'last-modified': cssStat.mtime.toUTCString(),
         'content-type': 'text/css'
      }

      //Send a Push Promise stream for the file
      stream.pushStream({ ':path': '/assets/css/common.css' }, (err, pushStream, headers) => {
        //Push the file in the newly created pushStream
        pushStream.respondWithFD(cssFile, cssRespHeaders)
      })
  } else {
      //If push is disabled then just log that
      console.log('Push disabled.')
  }

  //Respond to the original request
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  })
  stream.write('<DOCTYPE html><html><head><link rel="stylesheet" type="text/css" media="all" ref="/assets/css/common.css"></head><body><h1>Test</h1></body></html>')
})

//Start the server listening for requests on the given port
server.listen(PORT)
console.log(`Server listening on ${PORT}`)

})
