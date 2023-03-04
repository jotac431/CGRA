/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		//this.Materials();
        //this.Textures();
	}

	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.verticeValue = 50;

		/* VERTICES */
		//Baixo
		this.vertices.push(-this.verticeValue, -this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, -this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, -this.verticeValue, -this.verticeValue);
		this.vertices.push(-this.verticeValue, -this.verticeValue, -this.verticeValue);
		//Cima
		this.vertices.push(-this.verticeValue, this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, this.verticeValue, -this.verticeValue);
		this.vertices.push(-this.verticeValue, this.verticeValue, -this.verticeValue);
		//Frente
		this.vertices.push(-this.verticeValue, -this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, -this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, this.verticeValue, this.verticeValue);
		this.vertices.push(-this.verticeValue, this.verticeValue, this.verticeValue);
		//Trás
		this.vertices.push(-this.verticeValue, -this.verticeValue, -this.verticeValue);
		this.vertices.push(this.verticeValue, -this.verticeValue, -this.verticeValue);
		this.vertices.push(this.verticeValue, this.verticeValue, -this.verticeValue);
		this.vertices.push(-this.verticeValue, this.verticeValue, -this.verticeValue);
		//Direita
		this.vertices.push(this.verticeValue, -this.verticeValue, this.verticeValue);
		this.vertices.push(this.verticeValue, -this.verticeValue, -this.verticeValue);
		this.vertices.push(this.verticeValue, this.verticeValue, -this.verticeValue);
		this.vertices.push(this.verticeValue, this.verticeValue, this.verticeValue);
		//Esquerda
		this.vertices.push(-this.verticeValue, -this.verticeValue, this.verticeValue);
		this.vertices.push(-this.verticeValue, -this.verticeValue, -this.verticeValue);
		this.vertices.push(-this.verticeValue, this.verticeValue, -this.verticeValue);
		this.vertices.push(-this.verticeValue, this.verticeValue, this.verticeValue);

	

		/* INDICES */
		//Baixo
		this.indices.push(1, 2, 0, 2, 3, 0);
		//Cima
		this.indices.push(6, 5, 4, 7, 6, 4);
		//Frente
		this.indices.push(10, 9, 8, 11, 10, 8);
		//Trás
		this.indices.push(13, 14, 12, 14, 15, 12);
		//Direita
		this.indices.push(18, 17, 16, 19, 18, 16);
		//Esquerda
		this.indices.push(21, 22, 20, 22, 23, 20);
		
		
		/* NORMALS */
		//Baixo
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		//Cima
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		//Frente
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		//Trás
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		//Direita
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		//Esquerda
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		
		this.texCoords = [
			0.25, 1,
			0.5, 1,
			0.5, 0.666,
			0.25, 0.666,

			0.25, 0,
			0.5, 0,
			0.5, 0.333,
			0.25, 0.333,

			1, 0.666,
			0.75, 0.666,
			0.75, 0.333,
			1, 0.333,

			0.25, 0.666,
			0.5, 0.666,
			0.5, 0.333,
			0.25, 0.333,

			0.75, 0.666,
			0.5, 0.666,
			0.5, 0.333,
			0.75, 0.333,

			0, 0.666,
			0.25, 0.666,
			0.25, 0.333,
			0, 0.333

		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/*Materials() {

        //cubeMap material
        this.cubeMap_material = new CGFappearance(this);

        this.cubeMap_material.setAmbient(0.5, 0.5, 0.7, 1.0);
        this.cubeMap_material.setDiffuse(0.5, 0.5, 0.7, 1.0);
        this.cubeMap_material.setSpecular(1, 1, 1, 1.0);
        this.cubeMap_material.setShininess(10.0);
    }

	 Textures() {

        //cubeMap textura
        
        this.cubeMap_textureDay = new CGFtexture(this, 'images/day.jpg');
        this.cubeMap_material.setTexture(this.cubeMap_textureDay);
    }

    display() {

    	this.cubeMap_material.apply();
        //this.cubemap.display();
    }*/

	updateBuffers() {
	}
}