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
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
	}
    
    Materials(){
        // Cor de rosa
        this.rosa = new CGFappearance(this.scene);
        this.rosa.setAmbient(0.9, 0.5, 0.9, 1.0);
        this.rosa.setDiffuse(0, 0, 0, 1.0);
        this.rosa.setSpecular(0.9, 0.5, 0.9, 1.0);
        this.rosa.setShininess(10.0);

        // vermelho
        this.vermelho = new CGFappearance(this.scene);
        this.vermelho.setAmbient(1, 0, 0, 1.0);
        this.vermelho.setDiffuse(0, 0, 0, 1.0);
        this.vermelho.setSpecular(1, 0, 0, 1.0);
        this.vermelho.setShininess(10.0);

        // azul
        this.azul = new CGFappearance(this.scene);
        this.azul.setAmbient(0.2, 0.5, 1, 1.0);
        this.azul.setDiffuse(0, 0, 0, 1.0);
        this.azul.setSpecular(0.2, 0.5, 1, 1.0);
        this.azul.setShininess(10.0);

        // laranja
        this.laranja = new CGFappearance(this.scene);
        this.laranja.setAmbient(1, 0.6, 0, 1.0);
        this.laranja.setDiffuse(0, 0, 0, 1.0);
        this.laranja.setSpecular(1, 0.6, 0, 1.0);
        this.laranja.setShininess(10.0);

        // amarelo
        this.amarelo = new CGFappearance(this.scene);
        this.amarelo.setAmbient(1, 1, 0.1, 1.0);
        this.amarelo.setDiffuse(0, 0, 0, 1.0);
        this.amarelo.setSpecular(1, 1, 0.1, 1.0);
        this.amarelo.setShininess(10.0);

        // verde
        this.verde = new CGFappearance(this.scene);
        this.verde.setAmbient(0.5, 1, 0.1, 1.0);
        this.verde.setDiffuse(0, 0, 0, 1.0);
        this.verde.setSpecular(0.5, 1, 0.1, 1.0);
        this.verde.setShininess(10.0);

        // roxo
        this.roxo = new CGFappearance(this.scene);
        this.roxo.setAmbient(0.6, 0, 0.7, 1.0);
        this.roxo.setDiffuse(0, 0, 0, 1.0);
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

        this.azul.apply()
        this.triangleBig.display();

        this.scene.pushMatrix();
            this.laranja.apply()
            this.scene.translate(-Math.sqrt(2)/2.4, -Math.sqrt(2), 0);
            this.scene.rotate(45*DEGREE_TO_RAD,0,0,1);

            
            this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.customMaterial.apply()
            this.scene.multMatrix(translate);

            
            this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.amarelo.apply();
            this.scene.translate(-2,-2*Math.sqrt(2),0);
            this.scene.rotate(180*DEGREE_TO_RAD,0,1,0);
            this.scene.rotate(45*DEGREE_TO_RAD,0,0,1);

            
            this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.vermelho.apply();
            this.scene.translate(-Math.sqrt(1)/1.4145,2 + Math.sqrt(1)/1.4145,0);
            this.scene.rotate(-135*DEGREE_TO_RAD,0,0,1);

            
            this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.roxo.apply();
            this.scene.translate(Math.sqrt(1)/5,-3.025,0);
            this.scene.rotate(135*DEGREE_TO_RAD,0,0,1);

        
            this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.rosa.apply();
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