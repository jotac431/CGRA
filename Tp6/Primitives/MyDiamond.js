/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene,scale, coords) {
		super(scene);
		this.coords = coords;
		this.scale = scale;

		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		if(this.coords != null)
		this.texCoords = [];

		for(var i = 0; i < 2; i++)
			this.vertices.push(
				-1 * this.scale, 0, 0,	//0
				0, -1* this.scale, 0,	//1
				0, 1* this.scale, 0,	//2
				1* this.scale, 0, 0		//3
				);
		
		
		//Counter-clockwise reference of vertices
		for(var i = 0; i < 2; i++)
			this.indices.push(
				0 + (i * 4), 1 + (i * 4), 2 + (i * 4),
				1 + (i * 4), 3 + (i * 4), 2 + (i * 4),
				2 + (i * 4), 1 + (i * 4), 0 + (i * 4),
				2 + (i * 4), 3 + (i * 4), 1 + (i * 4)
			);

		//Normals
		for(var i = 0; i < 4; i++)
			this.normals.push(0, 0, -1);
		
		for(var i = 0; i < 4; i++)
			this.normals.push(0, 0, 1);

		if(this.coords != null)
		for (var i = 0; i < 2; i++)
			this.texCoords.push(...this.coords);
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers(){
    }
}

