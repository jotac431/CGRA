#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
varying vec4 normal;

varying vec4 my_gl_Position;

void main() {
	if (my_gl_Position.y > 0.5)
			gl_FragColor =  vec4(0.6,0.6,0.9, 1.0);
	else
	{
		gl_FragColor =  vec4(1,1,0, 1.0);
	}
}