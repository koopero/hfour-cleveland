precision highp float;
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"
#include "ofxLoopin/clock.glsl"


#include "lib/snoise.glsl"

float perlinSample( vec2 uv, float phase ) {
  vec4 nc = vec4( uv, 0.0, phase );

  nc.x *= 20.0;
  nc.x += clockTime*1.0;
  nc.z += clockTime*0.1;

  float val = snoise( nc );
  val = val * 0.5 + 0.5;
  return val;
}

// This is the main shader program.
void main()
{
  float phaseMin = 0.0;
  float phaseMax = 0.1;
  vec2 uv = srcCoord;

  OUT.r = perlinSample( uv, phaseMin );
  OUT.b = perlinSample( uv, (phaseMin+phaseMax)/2.0 );
  OUT.g = perlinSample( uv, phaseMin );
}
