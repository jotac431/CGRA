/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
    constructor(scene, position) {
        super(scene);
        this.position = position;
        this.extraBranches = [];

        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        this.cilindro = new MyTreeBranch(this.scene, 0,0,0, false);
    }

    Materials() {
        //Trunk material (brown)
        this.nestMaterial = new CGFappearance(this.scene);

        this.nestMaterial.setAmbient(0.7, 0.5, 0.3, 1.0);
        this.nestMaterial.setDiffuse(0.7, 0.5, 0.3, 1.0);
        this.nestMaterial.setSpecular(0,0,0, 1.0);
        this.nestMaterial.setShininess(10.0);
    }

    Textures() {
        //nest texture
        this.nestTexture = new CGFtexture(this.scene, 'images/nest.jpg');

        this.nestMaterial.setTexture(this.nestTexture);
    }

    display() {
    
        this.scene.pushMatrix();


        this.scene.translate(this.position.x, this.position.y, this.position.z);
        this.scene.translate(0, 0, -0.5);


        if(this.extraBranches.length > 0){
            for(var i = 0; i < this.extraBranches.length; i++){
                this.scene.pushMatrix();
                this.scene.translate(0.3,0,0.5);
                this.scene.rotate((360/this.extraBranches.length)*i*DEGREE_TO_RAD,0,1,0);

                this.scene.rotate(180*DEGREE_TO_RAD,0,1,0);
                this.scene.rotate(15*DEGREE_TO_RAD,0,0,1);
                this.extraBranches[i].display();

                this.scene.popMatrix();
            }
        }
        this.nestMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.3, 0, 0.25)
        this.scene.rotate(DEGREE_TO_RAD * 70, 1, 0, 0);
        this.cilindro.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0.3)
        this.scene.rotate(DEGREE_TO_RAD * 90, 1, 0, 0);
        this.scene.rotate(DEGREE_TO_RAD * 70, 0, 0, 1);
        this.cilindro.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0.6)
        this.scene.rotate(DEGREE_TO_RAD * -90, 1, 0, 0);
        this.scene.rotate(DEGREE_TO_RAD * 70, 0, 0, 1);
        this.cilindro.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.1, 0.4)
        this.scene.rotate(DEGREE_TO_RAD * 45, 0, 1, 0);
        this.scene.rotate(DEGREE_TO_RAD * 10, 0, 0, 1);
        this.scene.rotate(DEGREE_TO_RAD * 90, 1, 0, 0);
        this.cilindro.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }

    updateBranches(branch) {
        if(branch != null)
            this.extraBranches.push(branch);
    }
}