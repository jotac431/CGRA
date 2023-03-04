/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];

		for(var i = 0; i < 2; i++)
			this.vertices.push(
				0, 0, 0,	//0
				2, 0, 0,	//1
				3, 1, 0,	//2
				1, 1, 0,	//3
			);

		//Counter-clockwise reference of vertices
		for(var i = 0; i < 2; i++)
			this.indices.push(
				0 + (i * 4), 1 + (i * 4), 2 + (i * 4),
				2 + (i * 4), 3 + (i * 4), 0 + (i * 4),
				0 + (i * 4), 3 + (i * 4), 2 + (i * 4),
				2 + (i * 4), 1 + (i * 4), 0 + (i * 4)
			);
			
        //Normals
		for(var i = 0; i < 4; i++)
			this.normals.push(0, 0, 1);
	
		for(var i = 0; i < 4; i++)
			this.normals.push(0, 0, -1);
			
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers(){
    }
}