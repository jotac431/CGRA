/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.slices = 4;
        this.initBuffers();
        this.Materials();
    }

    initBuffers() {
        this.cilindro = new MyCylinder(this.scene, this.slices, 2, 0.3, 0.3);
        this.cone = new MyCone(this.scene, this.slices, null);
    }

    Materials() {
        //Trunk material (brown)
        this.brownMaterial = new CGFappearance(this.scene);

        this.brownMaterial.setAmbient(0.6, 0.3, 0, 1.0);
        this.brownMaterial.setDiffuse(0.3, 0.1, 0, 1.0);
        this.brownMaterial.setSpecular(0.3, 0.3, 0, 1.0);
        this.brownMaterial.setShininess(10.0);
    }

    display() {
        //Trunk
        this.brownMaterial.apply();

        this.cilindro.display();
    }
}