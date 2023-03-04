class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);
        this.levels = levels;
        this.aresta = 4;
        this.initBuffers();
    }

    initBuffers() {
        this.cube = new MyUnitCubeQuad(this.scene, this.aresta);
    }

    display() {
        for (var k = 0; k < this.levels; k++) {
            for(var i = (-(this.levels - k)*2 + 1)/2; i < ((this.levels - k)*2 - 1)/2; i++){
                for(var j = (-(this.levels - k)*2 + 1)/2; j < ((this.levels - k)*2 - 1)/2; j++){
                this.scene.pushMatrix();
                this.scene.translate(i * this.aresta + this.aresta/2,this.aresta/2 + k * this.aresta,j * this.aresta + this.aresta/2);
                this.cube.display();
                this.scene.popMatrix();
                }
            }
        }
    }
}