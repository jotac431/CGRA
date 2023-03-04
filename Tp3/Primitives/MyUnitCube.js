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
		//Baixo
		this.vertices.push(-0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, -0.5);
		this.vertices.push(-0.5, -0.5, -0.5);
		//Cima
		this.vertices.push(-0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, 0.5);
		this.vertices.push(0.5, 0.5, -0.5);
		this.vertices.push(-0.5, 0.5, -0.5);
		//Frente
		this.vertices.push(-0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, 0.5);
		this.vertices.push(0.5, 0.5, 0.5);
		this.vertices.push(-0.5, 0.5, 0.5);
		//Trás
		this.vertices.push(-0.5, -0.5, -0.5);
		this.vertices.push(0.5, -0.5, -0.5);
		this.vertices.push(0.5, 0.5, -0.5);
		this.vertices.push(-0.5, 0.5, -0.5);
		//Direita
		this.vertices.push(0.5, -0.5, 0.5);
		this.vertices.push(0.5, -0.5, -0.5);
		this.vertices.push(0.5, 0.5, -0.5);
		this.vertices.push(0.5, 0.5, 0.5);
		//Esquerda
		this.vertices.push(-0.5, -0.5, 0.5);
		this.vertices.push(-0.5, -0.5, -0.5);
		this.vertices.push(-0.5, 0.5, -0.5);
		this.vertices.push(-0.5, 0.5, 0.5);

	

		/* INDICES */
		//Baixo
		this.indices.push(0, 2, 1, 0, 3, 2);
		//Cima
		this.indices.push(4, 5, 6, 4, 6, 7);
		//Frente
		this.indices.push(8, 9, 10, 8, 10, 11);
		//Trás
		this.indices.push(12, 14, 13, 12, 15, 14);
		//Direita
		this.indices.push(16, 17, 18, 16, 18, 19);
		//Esquerda
		this.indices.push(20, 22, 21, 20, 23, 22);
		
		
		/* NORMALS */
		//Baixo
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		//Cima
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		//Frente
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		//Trás
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		//Direita
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		//Esquerda
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		
		

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers() {
	}
}