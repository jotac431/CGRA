/**
 * MySphere
 * @constructor
 */


class MySphere extends CGFobject {

    constructor(scene, slices, stacks, radius) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.radius = radius;
        this.initBuffers();
    };

    initBuffers() {
        this.vertices = [];
        this.normals = [];
        this.indices = [];


        for (var i = 0; i <= this.stacks; i++) {
            for (var j = 0; j < this.slices; j++) {
                this.vertices.push(this.radius * Math.cos(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), this.radius * Math.sin(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), this.radius * Math.sin(i * Math.PI / 2 / this.stacks));
                this.normals.push(this.radius * Math.cos(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), this.radius * Math.sin(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), 0);
            }
        }

        

        for (var i = 0; i <= this.stacks; i++) {
            for (var j = 0; j < this.slices; j++) {
                this.vertices.push(this.radius * Math.cos(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), this.radius * Math.sin(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), -this.radius * Math.sin(i * Math.PI / 2 / this.stacks));
                this.normals.push(this.radius * Math.cos(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), this.radius * Math.sin(j * Math.PI * 2 / this.slices) * Math.cos(i * Math.PI / 2 / this.stacks), 0);
            }
        }

        for (var i = 0; i < this.stacks * 2; i++) {
            for (var j = 0; j < 2*this.slices - 1; j++) {
                this.indices.push(this.slices * i + j, this.slices * i + j + 1, this.slices * (i + 1) + j);
                this.indices.push(this.slices * i + j + 1, this.slices * i + j, this.slices * (i + 1) + j);
                this.indices.push(this.slices * (i + 1) + j + 1, this.slices * (i + 1) + j, this.slices * i + j + 1);
                this.indices.push(this.slices * (i + 1) + j, this.slices * (i + 1) + j + 1, this.slices * i + j + 1);
            }
        }

        for (var i = 0; i < this.stacks * 2; i++) {
            var j = this.slices - 1;
            this.indices.push(this.slices * i + j, this.slices * i + j + 1, this.slices * (i + 1) + j);
            this.indices.push(this.slices * i + j + 1, this.slices * i + j, this.slices * (i + 1) + j);
            this.indices.push(this.slices * i, this.slices * i + j + 1, this.slices * i + j);
            this.indices.push(this.slices * i + j + 1, this.slices * i, this.slices * i + j);
        }

       

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    };
};
