/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.coords = coords;

		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		for (var i = 0; i < 2; i++)
			this.vertices.push(
				-2, 0, 0,	//0
				2, 0, 0,	//1
				0, 2, 0,	//2
			);

		//Counter-clockwise reference of vertices
		for (var i = 0; i < 2; i++)
			this.indices.push(
				0 + (i * 3), 1 + (i * 3), 2 + (i * 3),
				1 + (i * 3), 0 + (i * 3), 2 + (i * 3)
			);

		//Normals
		for (var i = 0; i < 3; i++)
			this.normals.push(0, 0, -1);

		for (var i = 0; i < 3; i++)
			this.normals.push(0, 0, 1);

		for (var i = 0; i < 2; i++)
			this.texCoords.push(...this.coords);


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords() {
	}

	updateBuffers() {
	}
}