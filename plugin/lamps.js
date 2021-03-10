const Blitface = require('blitface')
  
module.exports = lamps

function lamps( config ) {
  const loopin = this
  const blitface = new Blitface( config )

  const encoding = 'hex'
  const path = 'pixels/lamps/'

  // Setup output pixels node
  loopin.patch( {
    format: encoding,
    input: false,
    output: true,
    channels: 'rgb',
  }, path )

  var _buf 
  
  // Listen for output and send to blitface.
  loopin.dispatchListen( 'pixels', function ( event ) {
    if ( event.path != path ) return
    
    let { data } = event.data
    if ( !_buf )
      _buf = Buffer.from( data, encoding )
    else
      _buf.write( data, 0, encoding )

    blitface.blit( _buf )

    return true
  })

  // 
  return blitface.open()
  
}