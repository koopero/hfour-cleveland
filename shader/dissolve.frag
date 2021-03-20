precision highp float;
// Dissolve is a utility for transitions.
// It acts as a feedback loop which gradually
// mixes in an arbitrary input defined by `src`.
//  

#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

uniform sampler2D dstSampler;

void main()
{
  vec4 src = Texture(srcSampler, srcCoord);
  vec4 dst = Texture(dstSampler, srcCoord);

  OUT = mix( dst, src, 0.1 );
}
