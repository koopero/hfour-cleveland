#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"


uniform sampler2D mix0Sampler;
uniform sampler2D mix1Sampler;

void main()
{
  OUT = Texture(srcSampler, srcCoord);
  OUT *= vertColour;
}
