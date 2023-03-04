/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initBuffers();
        this.Materials();
    }

    initBuffers() {
        this.diamond = new MyDiamond(this.scene, [0, 0.5, 0.25, 0.75, 0.25, 0.25, 0.5, 0.5]);
        this.triangle = new MyTriangle(this.scene, [0, 0.5, 0.5, 1, 0, 1]);
        this.parallelogram = new MyParallelogram(this.scene, [1, 1, 0.5, 1, 0.25, 0.75, 0.75, 0.75]);
        this.triangleSmall_1 = new MyTriangleSmall(this.scene, [0.25, 0.75, 0.75, 0.75, 0.5, 0.5]);
        this.triangleSmall_2 = new MyTriangleSmall(this.scene, [0, 0, 0, 0.5, 0.25, 0.25]);
        this.triangleBig_1 = new MyTriangleBig(this.scene, [0, 0, 1, 0, 0.5, 0.5]);      
        this.triangleBig_2 = new MyTriangleBig(this.scene, [1, 0, 1, 1, 0.5, 0.5]);      

	}
    
    Materials(){
        // textura
        this.Texture_material = new CGFappearance(this.scene);
        this.texture = new CGFtexture(this.scene, 'images/tangram.png');

        this.Texture_material.setAmbient(1, 1, 1, 1.0);
        this.Texture_material.setDiffuse(1, 1, 1, 1.0);
        this.Texture_material.setSpecular(1, 1, 1, 1.0);
        this.Texture_material.setShininess(10.0);

        this.Texture_material.setTexture(this.texture);
        this.Texture_material.setTextureWrap('REPEAT', 'REPEAT');

        // Cor de rosa
        this.rosa = new CGFappearance(this.scene);
        this.rosa.setAmbient(0.9, 0.5, 0.9, 1.0);
        this.rosa.setDiffuse(0.9, 0.5, 0.9, 1.0);
        this.rosa.setSpecular(0.9, 0.5, 0.9, 1.0);
        this.rosa.setShininess(10.0);

        // vermelho
        this.vermelho = new CGFappearance(this.scene);
        this.vermelho.setAmbient(1, 0, 0, 1.0);
        this.vermelho.setDiffuse(1, 0, 0, 1.0);
        this.vermelho.setSpecular(1, 0, 0, 1.0);
        this.vermelho.setShininess(10.0);

        // azul
        this.azul = new CGFappearance(this.scene);
        this.azul.setAmbient(0.2, 0.5, 1, 1.0);
        this.azul.setDiffuse(0.2, 0.5, 1, 1.0);
        this.azul.setSpecular(0.2, 0.5, 1, 1.0);
        this.azul.setShininess(10.0);

        // laranja
        this.laranja = new CGFappearance(this.scene);
        this.laranja.setAmbient(1, 0.6, 0, 1.0);
        this.laranja.setDiffuse(1, 0.6, 0, 1.0);
        this.laranja.setSpecular(1, 0.6, 0, 1.0);
        this.laranja.setShininess(10.0);

        // amarelo
        this.amarelo = new CGFappearance(this.scene);
        this.amarelo.setAmbient(1, 1, 0.1, 1.0);
        this.amarelo.setDiffuse(1, 1, 0.1, 1.0);
        this.amarelo.setSpecular(1, 1, 0.1, 1.0);
        this.amarelo.setShininess(10.0);

        // verde
        this.verde = new CGFappearance(this.scene);
        this.verde.setAmbient(0.5, 1, 0.1, 1.0);
        this.verde.setDiffuse(0.5, 1, 0.1, 1.0);
        this.verde.setSpecular(0.5, 1, 0.1, 1.0);
        this.verde.setShininess(10.0);

        // roxo
        this.roxo = new CGFappearance(this.scene);
        this.roxo.setAmbient(0.6, 0, 0.7, 1.0);
        this.roxo.setDiffuse(0.6, 0, 0.7, 1.0);
        this.roxo.setSpecular(0.6, 0, 0.7, 1.0);
        this.roxo.setShininess(10.0);
    }

	display() {    
        var translate =[
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, -1.825, 0, 1
        ];

        this.Texture_material.apply();

        this.triangleBig_1.display();

        this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(2)/2.4, -Math.sqrt(2), 0);
            this.scene.rotate(45*DEGREE_TO_RAD,0,0,1);

            
            this.triangleBig_2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.multMatrix(translate);

            
            this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-2,-2*Math.sqrt(2),0);
            this.scene.rotate(180*DEGREE_TO_RAD,0,1,0);
            this.scene.rotate(45*DEGREE_TO_RAD,0,0,1);

            
            this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(1)/1.4145,2 + Math.sqrt(1)/1.4145,0);
            this.scene.rotate(-135*DEGREE_TO_RAD,0,0,1);

            
            this.triangleSmall_1.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(1)/5,-3.025,0);
            this.scene.rotate(135*DEGREE_TO_RAD,0,0,1);

        
            this.triangleSmall_2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(1)/1.4145,2+Math.sqrt(1)/1.4145,0);
            this.scene.rotate(-90*DEGREE_TO_RAD,0,0,1);

            
            this.triangle.display();
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