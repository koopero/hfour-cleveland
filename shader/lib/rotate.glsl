#include "./PI.glsl"

vec2 rotate2D(vec2 v, float a) {
	a = a / 180.0 * PI;
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec2 rotate2F(vec2 v, float a) {
	a = a * 2.0 * PI;
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec2 rotate2R(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec2 rotate2H(vec2 v, float a) {
	return rotate2F( v, a / 24.0 );
}

