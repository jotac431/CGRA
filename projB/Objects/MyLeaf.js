/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.Materials();
    }

    initBuffers() {
        this.triangle = new MyDiamond(this.scene, 1.5);
    }

    Materials() {
        //Tree top material (green)
        this.greenMaterial = new CGFappearance(this.scene);

        this.greenMaterial.setAmbient(0.4, 0.7, 0, 1.0);
        this.greenMaterial.setDiffuse(0.4, 0.7, 0, 1.0);
        this.greenMaterial.setSpecular(0.6, 0.9, 0, 1.0);
        this.greenMaterial.setShininess(10.0);
    }

    display() {
        //Trunk
        this.greenMaterial.apply();

        this.triangle.display();
    }

    updateBuffers() {
    }
}