precision highp float;
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

uniform sampler2D src1Sampler;
uniform float mixerMix;
uniform float mixerCurve;

void main()
{
  vec4 A = Texture(srcSampler,  srcCoord);
  vec4 B = Texture(src1Sampler, srcCoord);
  
  vec4 mp = vec4( mix( 0.25, 1.75, mixerCurve ) );


  A = pow( A, mp );
  B = pow( B, mp );
  OUT = mix( A, B, mixerMix );
  OUT = pow( OUT, 1.0/mp );
  OUT.a = 1.0;
}
