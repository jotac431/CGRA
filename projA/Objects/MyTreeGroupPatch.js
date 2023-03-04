/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        /* (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) */
        this.tree1 = new MyTree(this.scene, 1.5, 0.3, 2, 0.75, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree2 = new MyTree(this.scene, 1.5, 0.3, 2, 0.5, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree3 = new MyTree(this.scene, 2, 0.3, 2, 0.75, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree4 = new MyTree(this.scene, 1.2, 0.2, 1.75, 0.5, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree5 = new MyTree(this.scene, 1.8, 0.2, 1.75, 0.7, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree6 = new MyTree(this.scene, 1.5, 0.3, 2, 0.8, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree7 = new MyTree(this.scene, 1, 0.25, 3, 0.5, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree8 = new MyTree(this.scene, 0.8, 0.1, 1, 0.3, 'images/wood.jpg', 'images/leafs.jpg');
        this.tree9 = new MyTree(this.scene, 1.4, 0.3, 2, 0.5, 'images/wood.jpg', 'images/leafs.jpg');

    }

    Materials() {
    }

    Textures() {
    }

    display() {
        this.scene.pushMatrix();
            this.tree1.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(0,0,2)
            this.tree2.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(0.3,0,-1.9)
            this.tree3.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(1.8,0,0)
            this.tree4.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(-2,0,-0.4)
            this.tree5.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(2,0,1.5)
            this.tree6.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(-1.9,0,-2)
            this.tree7.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(2,0,-1.65)
            this.tree8.display()
        this.scene.popMatrix();
        this.scene.pushMatrix();
            this.scene.translate(-1.7,0,1.5)
            this.tree9.display()
        this.scene.popMatrix();
    }

    updateBuffers() {
    }
}