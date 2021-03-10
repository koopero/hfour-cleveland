// Audio-reactivity placeholder shader
precision highp float;
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

void main()
{
  OUT = Texture(srcSampler, srcCoord);
}
