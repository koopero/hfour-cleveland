precision highp float;
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/buffer.glsl"
#include "ofxLoopin/clock.glsl"
#include "lib/snoise.glsl"

uniform vec4 perlinScale;

float perlinSample( vec2 uv, float phase ) {
  vec4 nc = vec4( uv, 0.0, phase );
  
  nc.x *= float(bufferWidth);
  nc.x /= bufferAspect;
  nc.x += clockTime * perlinScale.z * 10.0;

  nc.x *= pow(4.0,perlinScale.x);
  nc.y *= pow(4.0,perlinScale.y);

  float val = snoise( nc );
  val = val * 0.5 + 0.5;
  return val;
}

// This is the main shader program.
void main()
{
  float phaseMin = 20.0;
  float phaseMax = 50.4;
  vec2 uv = srcCoord;

  OUT.r = perlinSample( uv, phaseMin );
  OUT.b = perlinSample( uv, (phaseMin+phaseMax)/2.0 );
  OUT.g = perlinSample( uv, phaseMin );
}
