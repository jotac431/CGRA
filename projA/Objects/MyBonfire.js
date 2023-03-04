/**
 * MyBonfire
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBonfire extends CGFobject {
    constructor(scene) {
        super(scene);
        this.texture = 'images/wood.jpg';
        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        this.cilindro = new MyCylinder(this.scene, 40, 1, 0.1, 0.1);
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
        //Trunk texture
        this.trunkTexture = new CGFtexture(this.scene, this.texture);

        this.brownMaterial.setTexture(this.trunkTexture);
        this.brownMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    UpdateTextures(fireOn) {
        if (fireOn) {
            if(this.texture == 'images/wood.jpg'){
                this.texture = 'images/burning.jpg';

                this.trunkTexture = new CGFtexture(this.scene, this.texture);

                this.brownMaterial.setTexture(this.trunkTexture);
                this.brownMaterial.setTextureWrap('REPEAT', 'REPEAT');
            }
        }
        else if(this.texture == 'images/burning.jpg') {
            this.texture = 'images/wood.jpg';

            this.trunkTexture = new CGFtexture(this.scene, this.texture);

            this.brownMaterial.setTexture(this.trunkTexture);
            this.brownMaterial.setTextureWrap('REPEAT', 'REPEAT');

        }
    }

    display() {
        this.brownMaterial.apply();



        this.scene.pushMatrix();
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
        this.scene.translate(0.5, 0.2, 0.4)
        this.scene.rotate(DEGREE_TO_RAD * 45, 0, 1, 0);
        this.scene.rotate(DEGREE_TO_RAD * 180, 1, 0, 0);
        this.scene.rotate(DEGREE_TO_RAD * 80, 0, 0, 1);
        this.cilindro.display();
        this.scene.popMatrix();
    }

    updateBuffers() {
    }
}