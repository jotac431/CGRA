/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		this.indices = [];
		var vertice = 0.5;

		/* VERTICES */
		for(var i = -1; i < 1; i++)
			this.vertices.push(	-vertice, vertice + i, vertice,
								vertice, vertice + i, vertice,
								vertice, vertice +i, -vertice,
								-vertice, vertice +i, -vertice);

		/* INDICES */

		//Top
		this.indices.push(4, 5, 7, 7, 5, 6);
		//Bottom					
		this.indices.push(0, 3, 1, 1, 3, 2);
		//Laterals
        for(var i = 0; i < 4; i++)
			this.indices.push(	i, (i+1)%4, i+4, 
								i+4, (i+1)%4, 4 + (i+1)%4);
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}