/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
    constructor(scene, x, y, z, applyTexture) {
        super(scene);
        this.position = [];
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        this.applyTexture = applyTexture;
        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        this.cilindro = new MyCylinder(this.scene, 40, 0.8, 0.08, 0.08);
        this.miniCilindro = new MyCylinder(this.scene, 40, 0.5, 0.05, 0.05);
    }

    Materials() {
        //Trunk material (brown)
        this.brownMaterial = new CGFappearance(this.scene);

        this.brownMaterial.setAmbient(0.6, 0.3, 0, 1.0);
        this.brownMaterial.setDiffuse(0.3, 0.1, 0, 1.0);
        this.brownMaterial.setSpecular(0.3, 0.3, 0, 1.0);
        this.brownMaterial.setShininess(10.0);
    }

    Textures() {
        //wood texture
        this.woodTexture = new CGFtexture(this.scene, 'images/nest.jpg');

        this.brownMaterial.setTexture(this.woodTexture);
    }

    display() {
        if(this.applyTexture)
        this.brownMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(this.position.x,this.position.y,this.position.z);
        this.scene.translate(-0.4,0,0)
        this.scene.rotate(-90 * DEGREE_TO_RAD,0,0,1)

        this.scene.pushMatrix();
        this.scene.translate(0,0.3,0)
        this.scene.rotate(30 * DEGREE_TO_RAD,0,0,1)
        this.miniCilindro.display();
        this.scene.popMatrix();
        this.cilindro.display();

        this.scene.popMatrix();
    }

    getPosition(){
        return this.position;
    }

    updatePosition(position) {
        this.position.x = position.x;
        this.position.y = position.y;
        this.position.z = position.z;
    }
}