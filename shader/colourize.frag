precision highp float;
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"


uniform float colourizeGain;
uniform float hueInput;
uniform float hueLFO;

void main()
{
  OUT = Texture(srcSampler, srcCoord);
}
