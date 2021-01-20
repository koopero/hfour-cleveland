// Dissolve is a utility for transitions.
// It acts as a feedback loop which gradually
// mixes in an arbitrary input defined by `src`.
//  

#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

void main()
{
  OUT = Texture(srcSampler, srcCoord);
  OUT *= vertColour;
}
