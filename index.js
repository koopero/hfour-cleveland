async function run() {
  require('loopin-base').open( __dirname )
  .then( ( loopin ) => {
    const config = require('loopin-base').config( __dirname )
    const { blitface } = config
    if ( blitface ) {
      require('./node/lamps')( loopin, blitface )
    }
  } )
}

if ( module == require.main )
  run()
else 
  module.exports = run