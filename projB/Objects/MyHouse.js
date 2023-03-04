/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        this.cube = new MyUnitCubeQuad(this.scene, 1);
        this.pyramid = new MyPyramid(this.scene, 4, null);
        this.prism = new MyPrism(this.scene, 6, 3);
        this.telhado_porta = new MyPrism(this.scene, 3, 3);
        this.telhado = new MyPrism(this.scene, 3, 11);
        this.triangle = new MyTriangle(this.scene, [0, 0.175, 0.35, 0, 0.35, 0.35]);
        this.quad = new MyQuad(this.scene, 1.3);

    }

    Materials() {
        //Roof (orange)
        this.roofMaterial = new CGFappearance(this.scene);

        this.roofMaterial.setAmbient(0.9, 0.4, 0.2, 1.0);
        this.roofMaterial.setDiffuse(0.9, 0.4, 0.2, 1.0);
        this.roofMaterial.setSpecular(0, 0, 0, 1.0);
        this.roofMaterial.setShininess(10.0);

        //Roof garage (orange)
        this.roofGarageMaterial = new CGFappearance(this.scene);

        this.roofGarageMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.roofGarageMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.roofGarageMaterial.setSpecular(0, 0, 0, 1.0);
        this.roofGarageMaterial.setShininess(10.0);

        //Columns (grey)
        this.columnMaterial = new CGFappearance(this.scene);

        this.columnMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.columnMaterial.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.columnMaterial.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.columnMaterial.setShininess(10.0);

        //walls (yellow)
        this.wallsMaterial = new CGFappearance(this.scene);

        this.wallsMaterial.setAmbient(0.8, 0.8, 0.6, 1.0);
        this.wallsMaterial.setDiffuse(0.8, 0.8, 0.6, 1.0);
        this.wallsMaterial.setSpecular(0, 0, 0, 1.0);
        this.wallsMaterial.setShininess(10.0);

        //Windows (blue)
        this.windowsMaterial = new CGFappearance(this.scene);

        this.windowsMaterial.setAmbient(0, 0.4, 1, 1.0);
        this.windowsMaterial.setDiffuse(0, 0.4, 1, 1.0);
        this.windowsMaterial.setSpecular(1, 1, 1, 1.0);
        this.windowsMaterial.setShininess(10.0);

        //Door (brown)
        this.doorMaterial = new CGFappearance(this.scene);

        this.doorMaterial.setAmbient(0.4, 0.1, 0, 1.0);
        this.doorMaterial.setDiffuse(0.4, 0.1, 0, 1.0);
        this.doorMaterial.setSpecular(0, 0, 0, 1.0);
        this.doorMaterial.setShininess(10.0);

        //Garage (grey)
        this.garageMaterial = new CGFappearance(this.scene);

        this.garageMaterial.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.garageMaterial.setDiffuse(0.1, 0.1, 0.1, 1.0);
        this.garageMaterial.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.garageMaterial.setShininess(10.0);
    }

    Textures() {
        //Door texture
        this.doorTexture = new CGFtexture(this.scene, 'images/door.jpg');

        this.doorMaterial.setTexture(this.doorTexture);

        //window texture
        this.windowTexture = new CGFtexture(this.scene, 'images/window.jpg');

        this.windowsMaterial.setTexture(this.windowTexture);

        //garage texture
        this.garareTexture = new CGFtexture(this.scene, 'images/garage.jpg');

        this.garageMaterial.setTexture(this.garareTexture);

        //roof texture
        this.roofTexture = new CGFtexture(this.scene, 'images/roof2.jpg');

        this.roofMaterial.setTexture(this.roofTexture);

        //roof texture
        this.roofGarageTexture = new CGFtexture(this.scene, 'images/roof.jpg');

        this.roofGarageMaterial.setTexture(this.roofGarageTexture);
    }

    display() {

        this.wallsMaterial.apply();

        //casa entrada
        this.scene.pushMatrix();
        this.scene.translate(1.5, 1.5, 1.5);
        this.scene.scale(3, 3, 3);
        this.cube.display();
        this.scene.popMatrix();

        //casa corpo
        this.scene.pushMatrix();
        this.scene.translate(7, 1.5, 1.5);
        this.scene.scale(8, 3, 3);
        this.cube.display();
        this.scene.popMatrix();

        //garagem
        this.scene.pushMatrix();
        this.scene.translate(9.5, 1.5, 4.5);
        this.scene.scale(3, 3, 3);
        this.cube.display();
        this.scene.popMatrix();

        //telhados

        //telhado garagem
        this.roofGarageMaterial.apply();
        
        this.scene.pushMatrix();
        this.scene.translate(9.5, 3, 4.5);
        this.scene.scale(2.125, 0.5, 2.125);
        this.scene.rotate(DEGREE_TO_RAD*45, 0,1,0);
        this.pyramid.display();
        this.scene.popMatrix();

        //telhado entrada
        this.roofMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 3.5, 1.5);
        this.scene.rotate(DEGREE_TO_RAD*90, 0,1,0);
        this.scene.rotate(DEGREE_TO_RAD*90, 0,0,1);
        this.scene.scale(1, 1, 1.735);
        this.telhado_porta.display();
        this.scene.popMatrix();

        //telhado corpo
        this.scene.pushMatrix();
        this.scene.translate(11, 3.5, 1.5);
        this.scene.rotate(DEGREE_TO_RAD*90, 0,0,1);
        this.scene.scale(1, 1, 1.735);
        this.telhado.display();
        this.scene.popMatrix();

        //tapar espacos vazios
        this.scene.pushMatrix();
        this.scene.translate(11, 3, 1.5);
        this.scene.rotate(DEGREE_TO_RAD*-135, 1,0,0);
        this.scene.rotate(DEGREE_TO_RAD*90, 0,1,0);
        this.scene.scale(1.061, 1.061, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 3, 1.5);
        this.scene.rotate(DEGREE_TO_RAD*135, 1,0,0);
        this.scene.rotate(DEGREE_TO_RAD*-90, 0,1,0);
        this.scene.scale(1.061, 1.061, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 3, 4.5);
        this.scene.rotate(DEGREE_TO_RAD*-135, 0,0,1);
        this.scene.scale(1.061, 1.061, 1);
        this.triangle.display();
        this.scene.popMatrix();

        //Colunas
        this.columnMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.2, 0, 4.2);
        this.scene.scale(0.2, 1, 0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.8, 0, 4.2);
        this.scene.scale(0.2, 1, 0.2);
        this.prism.display();
        this.scene.popMatrix();

        //janelas
        this.windowsMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(4.4, 1.9, 3.005);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(6.6, 1.9, 3.005);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.005, 1.9, 1.5);
        this.scene.rotate(DEGREE_TO_RAD*-90, 0,1,0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(7.8, 1.9, -0.01);
        this.scene.scale(4, 1.1, 1);
        this.scene.rotate(DEGREE_TO_RAD*180, 0,1,0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 1.9, -0.01);
        this.scene.rotate(DEGREE_TO_RAD*180, 0,1,0);
        this.quad.display();
        this.scene.popMatrix();

        //porta
        this.doorMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 1.235, 3.005);
        this.scene.scale(1, 1.9, 1);
        this.quad.display();
        this.scene.popMatrix();

        //garagem
        this.garageMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(9.5, 1.3, 6.005);
        this.scene.scale(1.8, 2, 1);
        this.quad.display();
        this.scene.popMatrix();

    }

    updateBuffers() {
    }
}