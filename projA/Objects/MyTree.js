/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.slices = 10;
        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        this.cilindro = new MyCylinder(this.scene, this.slices, this.trunkHeight, this.trunkRadius, this.trunkRadius);
        this.cone = new MyCone(this.scene, this.slices, null);
    }

    Materials() {
        //Trunk material (brown)
        this.brownMaterial = new CGFappearance(this.scene);

        this.brownMaterial.setAmbient(0.6, 0.3, 0, 1.0);
        this.brownMaterial.setDiffuse(0.3, 0.1, 0, 1.0);
        this.brownMaterial.setSpecular(0.3, 0.3, 0, 1.0);
        this.brownMaterial.setShininess(10.0);

        //Tree top material (green)
        this.greenMaterial = new CGFappearance(this.scene);

        this.greenMaterial.setAmbient(0.4, 0.7, 0, 1.0);
        this.greenMaterial.setDiffuse(0.4, 0.7, 0, 1.0);
        this.greenMaterial.setSpecular(0.6, 0.9, 0, 1.0);
        this.greenMaterial.setShininess(10.0);
    }

    Textures() {
        //Trunk texture
        this.trunkTexture = new CGFtexture(this.scene, this.trunkTexture);

        this.brownMaterial.setTexture(this.trunkTexture);
        this.brownMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //Tree top texture
        this.treeTopTexture = new CGFtexture(this.scene, this.treeTopTexture);

        this.greenMaterial.setTexture(this.treeTopTexture);
        this.greenMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        //Trunk
        this.brownMaterial.apply();

        this.cilindro.display();

        //Tree top
        this.greenMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);

        this.cone.display();
        this.scene.popMatrix();
    }

    updateBuffers() {
    }
}