module.exports = lamps

function lamps( loopin, config ) {
  const Blitface = require('blitface')

  const lamps = {}

  const blitface = new Blitface( config )

  let encoding = 'hex'

  loopin.patch( {
    format: encoding,
    input: false,
    output: true,
    buffer: 'lamps',
    channels: 'rgb',
  }, 'pixels/lamps' )


  function lampsOpen() {
    return blitface.open()
  }

  lampsOpen()


  var buf 

  loopin.dispatchListen( 'pixels', function ( event ) {
    let data = event.data


    if ( !buf )
      buf = Buffer.from( event.data.data, encoding )
    else
      buf.write( event.data.data, 0, encoding )

    blitface.blit( buf )

    return true
  })
  
}