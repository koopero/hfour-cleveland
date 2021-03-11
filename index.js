// Main application entry point.
async function run() {

  // Load loopin-base enviroment.
  const loopin = await require('loopin-base').open( __dirname )

  // Load configuration from loopin.config.yaml & loopin.local.yaml
  const config = require('loopin-base').config( __dirname )
  
  // Load lamps setup from config.
  const { blitface } = config
  if ( blitface ) {
    loopin.plugin( require('./plugin/lamps'), blitface )
  }
}


if ( module == require.main )
  run()
else 
  module.exports = run