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
		this.normals = [];

		/* VERTICES */

		this.vertices.push(-0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, -0.5);
		this.vertices.push(-0.5, -0.5, -0.5);

		this.vertices.push(-0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, -0.5);
		this.vertices.push(-0.5, 0.5, -0.5);

		this.vertices.push(-0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, -0.5);
		this.vertices.push(-0.5, -0.5, -0.5);

		this.vertices.push(-0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, -0.5);
		this.vertices.push(-0.5, 0.5, -0.5);

		this.vertices.push(-0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, -0.5);
		this.vertices.push(-0.5, -0.5, -0.5);

		this.vertices.push(-0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, -0.5);
		this.vertices.push(-0.5, 0.5, -0.5);

		/*for (var j = 0; j < 3; j++)
			for (var i = -1; i < 1; i++) {
				this.vertices.push(-vertice, vertice + i, vertice);
				this.vertices.push(vertice, vertice + i, vertice);
				this.vertices.push(vertice, vertice + i, -vertice);
				this.vertices.push(-vertice, vertice + i, -vertice);
			}*/

		/* INDICES */
		for (var j = 0; j < 3; j++){
			
			this.indices.push(0+(8*j), 3+(8*j), 1+(8*j), 3+(8*j), 2+(8*j), 1+(8*j));
			this.indices.push(4+(8*j), 5+(8*j), 7+(8*j), 7+(8*j), 5+(8*j), 6+(8*j));

			this.indices.push(0+(8*j), 1+(8*j), 4+(8*j), 4+(8*j), 1+(8*j), 5+(8*j));
			this.indices.push(1+(8*j), 2+(8*j), 5+(8*j), 5+(8*j), 2+(8*j), 6+(8*j));
			this.indices.push(3+(8*j), 6+(8*j), 2+(8*j), 3+(8*j), 7+(8*j), 6+(8*j));
			this.indices.push(0+(8*j), 4+(8*j), 3+(8*j), 3+(8*j), 4+(8*j), 7+(8*j));
		}
		/*for (var j = 0; j < 3; j++) {
			//Top
			this.indices.push(4 + (j * 8), 5 + (j * 8), 7 + (j * 8), 7 + (j * 8), 5 + (j * 8), 6 + (j * 8));
			//Bottom					
			this.indices.push(0 + (j * 8), 3 + (j * 8), 1 + (j * 8), 1 + (j * 8), 3 + (j * 8), 2 + (j * 8));
			//Laterals
			for (var i = 0; i < 4; i++)
				this.indices.push(i + (j * 8), ((i + 1) % 4) + (j * 8), (i + 4) + (j * 8),
					(i + 4) + (j * 8), ((i + 1) % 4) + (j * 8), (4 + (i + 1) % 4) + (j * 8));
		}*/
		

		/* NORMALS */
		
		this.normals.push(-1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(-1, 0, 0);
		
		this.normals.push(-1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(-1, 0, 0);
		
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);

		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		
		/*for (var j = -1; j < 1; j++) {
			for (var i = 0; i < 4; i++)
				this.normals.push(-Math.cos(Math.PI / 2 * i), 0, Math.sin(Math.PI / 2 * i));
		}

		for (var j = -1; j < 1; j++) {
			for (var i = 0; i < 4; i++)
				this.normals.push(-Math.cos(Math.PI / 2 * (i + 1)), 0, Math.sin(Math.PI / 2 * (i + 1)));
		}

		for (var j = -1; j < 1; j++)
			for (var i = 0; i < 4; i++) {
				if (j != -1)
					j = 1;
				this.normals.push(0, j, 0);
			}*/

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers() {
	}
}