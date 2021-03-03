precision highp float;
// Simple Layer
//
// This is a trivial layer, designed to demonstrate
// very basic shader programming.
// 

// These lines set up the shader by including library files.
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"
#include "ofxLoopin/clock.glsl"

// A 'uniform' is a special variable used to control a shader.
// In this case, we have only one uniform.
uniform float simplePhase;

// This is the main shader program.
void main()
{
  // Create a variable with the name `accum` and a value of 0.0
  // `float` means the variable can hold a real number, not
  // limited to integers.
  float accum = 0.0;

  // Next, we'll add some other components to this number.
  // The intention here is that the coefficients of 
  // individual inputs can be remixed to expressive effect.
  // 
  accum += srcCoord.x * 20.0;
  accum += srcCoord.y * 1.1;
  accum += clockTime / 5.0;
  accum += simplePhase * 4.2;

  // Now, we convert this floating point value to
  // an integer.
  int index = int(accum);

  // Using a the binary AND operator (&), we ensure that
  // `index` will always have a value between 0-3.
  index = index & 3;

  // Now, we use a series of `if` statements to output
  // RGB colours depending on index.
  if ( index == 3 ) {
    // White
    OUT.rgb = vec3( 1.0, 1.0, 1.0 );
  } else if ( index == 2 ) {
    // Yellow
    OUT.rgb = vec3( 1.0, 1.0, 0.0 );
  } else if ( index == 1 ) {
    // Magenta
    OUT.rgb = vec3( 1.0, 0.0, 1.0 );
  } else {
    // Cyan 
    OUT.rgb = vec3( 0.0, 1.0, 1.0 );
  }
}
