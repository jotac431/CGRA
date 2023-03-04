/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPrism extends CGFobject {
    constructor(scene, slices, height) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];


        /* VERTICES */
        for (var j = 0; j < this.slices; j++) {
            for (var i = 0; i < 2; i++) {
                this.vertices.push(Math.cos((j + i) * 360 * DEGREE_TO_RAD / this.slices), 0, Math.sin((j + i) * 360 * DEGREE_TO_RAD / this.slices));
                this.vertices.push(Math.cos((j + i) * 360 * DEGREE_TO_RAD / this.slices), this.height, Math.sin((j + i) * 360 * DEGREE_TO_RAD / this.slices));
            }
        }

        /* INDICES */
        for (var j = 0; j < this.slices * 4; j = j + 4) {
            this.indices.push(j, j + 2, j + 1,
                j + 1, j + 2, j + 3);
            this.indices.push(j, j + 1, j + 2,
                j + 3, j + 2, j + 1);
        }


        /* NORMALS */
        for (var j = 0; j < this.slices; j++) {
            for (var i = 0; i < 2; i++) {
                this.normals.push(Math.cos(((j) * 360 * DEGREE_TO_RAD / this.slices) + 360 * DEGREE_TO_RAD / (this.slices * 2)), 0, Math.sin(((j) * 360 * DEGREE_TO_RAD / this.slices) + 360 * DEGREE_TO_RAD / (this.slices * 2)));
                this.normals.push(Math.cos(((j) * 360 * DEGREE_TO_RAD / this.slices) + 360 * DEGREE_TO_RAD / (this.slices * 2)), 0, Math.sin(((j) * 360 * DEGREE_TO_RAD / this.slices) + 360 * DEGREE_TO_RAD / (this.slices * 2)));
            }
        }

        /* TEXT COORDS */
        for (var j = 0; j < this.slices; j++) {
            for (var i = 0; i < 2; i++) {
                this.texCoords.push((j + i) / this.slices, 1);
                this.texCoords.push((j + i) / this.slices, 0);
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    updateBuffers() {
    }
}