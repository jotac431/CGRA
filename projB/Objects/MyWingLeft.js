/**
 * MyWing
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyWingLeft extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.Materials();
        this.Textures();

    }

    initBuffers() {
        this.triangle = new MyTriangle(this.scene, [0,0, 1,0 , 0, 1]);
    }

    Materials(){

        this.OrandMaterial = new CGFappearance(this.scene);

        this.OrandMaterial.setAmbient(0, 0.5, 0.3, 1.0);
        this.OrandMaterial.setDiffuse(0, 0.5, 0.3, 1.0);
        this.OrandMaterial.setSpecular(0, 0.5, 0.3, 1.0);
        this.OrandMaterial.setShininess(10.0);

    }

     Textures() {

        //Bird texture
       this.birdTexture = new CGFtexture(this.scene, 'images/penas.jpg');

        this.OrandMaterial.setTexture(this.birdTexture);
     }

    display() {

        this.OrandMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(2,0,0.6);
        this.scene.rotate(90*DEGREE_TO_RAD,1,0,0);
        this.scene.rotate(0*DEGREE_TO_RAD,0,1,0);
        this.scene.rotate(90*DEGREE_TO_RAD,0,0,1);
        this.scene.scale(1, 2, 1)
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.3,-0.75, 0.6);
        this.scene.rotate(90*DEGREE_TO_RAD,1,0,0);
        this.scene.rotate(150*DEGREE_TO_RAD,0,1,0);
        this.scene.rotate(90*DEGREE_TO_RAD,0,0,1);
        this.scene.scale(1, 1.5, 1)
        this.triangle.display();
        this.scene.popMatrix();

    }

}