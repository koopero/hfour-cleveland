// Correct Layer
//
// Apply a final colour correction.
// In practice, this is where the non-linearity and
// wierd spectrums of actual LEDs are hammered out.
//
// 
//
// First, this transformation is applied to the saturation
// portion of the input in HSV space, then as RGB values.
//
//
#include "ofxLoopin/compatible.glsl"
#include "ofxLoopin/frag.glsl"
#include "ofxLoopin/src.glsl"

#include "lib/hsv.glsl"

uniform vec4 correctRGBSmax;
uniform vec4 correctRGBSpow;

void main()
{
  // Get input sample
  OUT = Texture(srcSampler, srcCoord);

  // Convert to HSV
  vec3 HSV = rgb2hsv( OUT.rgb );

  // Apply saturation correction.
  HSV.y = pow( HSV.y, correctRGBSpow.a ) * correctRGBSmax.a;

  // Back to RGB.
  OUT.rgb = hsv2rgb( HSV );

  // Final gamma and gain.
  OUT.rgb = pow( OUT.rgb, correctRGBSmax.rgb ) * correctRGBSmax.rgb; 
}