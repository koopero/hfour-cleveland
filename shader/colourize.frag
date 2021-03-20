precision highp float;
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"
#include "ofxLoopin/clock.glsl"


#include "lib/hsv.glsl"
#include "lib/snoise.glsl"


uniform sampler2D paletteSampler;

uniform float hueInput;
uniform float hueLFO;
uniform float colourizeMixDry;


void main()
{
  vec4 src = Texture(srcSampler, srcCoord);

  vec3 srcHSV = rgb2hsv( src.rgb );

  // Convert hue portion to radians
  float hueAng = srcHSV.x * 3.1415 * 2.0;

  // Convert hue & saturation to 2D vector
  vec2 hueVec = vec2( cos( hueAng ), sin( hueAng ) ) * srcHSV.y;

  vec3 nc1 = vec3( srcCoord, clockTime / 10.0 );
  vec2 hueNoise = vec2( snoise( nc1.xyz ), snoise( nc1.yxz + 1.618 ) );

  // hueVec *= 0.0;
  hueVec += hueNoise * 0.1;

  float hue = atan( hueVec.y, hueVec.x );

  vec2 palCoord = vec2( hue, 0.0 );


  vec4 pal = Texture( paletteSampler, palCoord );

  OUT = pal;
  OUT *= srcHSV.z;
  // Finally, mix with original.

  OUT = mix( OUT, src, colourizeMixDry ); 

}
