attribute vec3 vertexPosition;

uniform mat4 modelViewMatrix;
uniform mat4 perspectiveMatrix;

void main(void) {
  gl_Position = perspectiveMatrix * modelViewMatrix * vec4(  vertexPosition, 1.0);
}
