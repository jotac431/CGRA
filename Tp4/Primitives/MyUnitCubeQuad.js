/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initBuffers();
        this.Materials();
    }

    initBuffers() {
        this.quad = new MyQuad(this.scene);
	}
    
    Materials(){
        // textura
        this.Bottom_texture = new CGFappearance(this.scene);

        this.Bottom_texture.setAmbient(1, 1, 1, 1.0);
        this.Bottom_texture.setDiffuse(1, 1, 1, 1.0);
        this.Bottom_texture.setSpecular(1, 1, 1, 1.0);
        this.Bottom_texture.setShininess(10.0);

        this.Bottom_texture.loadTexture('images/mineBottom.png');
        this.Bottom_texture.setTextureWrap('REPEAT', 'REPEAT');

        // textura
        this.Side_texture = new CGFappearance(this.scene);

        this.Side_texture.setAmbient(1, 1, 1, 1.0);
        this.Side_texture.setDiffuse(1, 1, 1, 1.0);
        this.Side_texture.setSpecular(1, 1, 1, 1.0);
        this.Side_texture.setShininess(10.0);

        this.Side_texture.loadTexture('images/mineSide.png');
        this.Side_texture.setTextureWrap('REPEAT', 'REPEAT');


        // textura
        this.Top_texture = new CGFappearance(this.scene);

        this.Top_texture.setAmbient(1, 1, 1, 1.0);
        this.Top_texture.setDiffuse(1, 1, 1, 1.0);
        this.Top_texture.setSpecular(1, 1, 1, 1.0);
        this.Top_texture.setShininess(10.0);

        this.Top_texture.loadTexture('images/mineTop.png');
        this.Top_texture.setTextureWrap('REPEAT', 'REPEAT');


       
    }

	display() {    
        

        //Frente
        this.Side_texture.apply();
        this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);

            this.quad.display();
        this.scene.popMatrix();

        //Trás
        this.Side_texture.apply();
        this.scene.pushMatrix();
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(180 * DEGREE_TO_RAD, 0, 1, 0);

            this.quad.display();
        this.scene.popMatrix();

        //Baixo
        this.Bottom_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 0);
            this.scene.rotate(90 * DEGREE_TO_RAD, 1, 0, 0);

            this.quad.display();
        this.scene.popMatrix();

        //Cima
        this.Top_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
            this.scene.translate(0, 0.5, 0);
            this.scene.rotate(-90 * DEGREE_TO_RAD, 1, 0, 0);

            this.quad.display();
        this.scene.popMatrix();

        //Direita
        this.Side_texture.apply();
        this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(90 * DEGREE_TO_RAD, 0, 1, 0);

            this.quad.display();
        this.scene.popMatrix();

        //Esquerda
        this.Side_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-90 * DEGREE_TO_RAD, 0, 1, 0);

            this.quad.display();
        this.scene.popMatrix();





        
       
    }
    
    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
    };
    disableNormalViz(){
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();
    };
    updateBuffers(){
    }
}