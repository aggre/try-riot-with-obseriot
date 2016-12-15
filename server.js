var express = require( 'express' )
var app = express()
var path = require( 'path' )
var port = 9000

app.get( '/*', function( req, res ) {
  var pathname = req.path
  if ( pathname.match( /.*\.js/ ) ) res.sendFile( __dirname + pathname )
  else res.sendFile( __dirname + '/index.html' )
} )

app.listen( port )

console.log( 'Server running at http://localhost:' + port )
