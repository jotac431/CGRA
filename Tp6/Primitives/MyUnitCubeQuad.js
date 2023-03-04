/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene, aresta, BottomText, TopText, FrontText, BackText, RightText, LeftText) {
        super(scene);
        this.aresta = aresta;
        this.Bottom_texture = BottomText;
        this.Top_texture = TopText;
        this.Front_texture = FrontText;
        this.Back_texture = BackText;
        this.Right_texture = RightText;
        this.Left_texture = LeftText;
        this.initBuffers();
        this.Materials();
    }

    initBuffers() {
        this.quad = new MyQuad(this.scene, this.aresta);
    }

    Materials() {
    }

    display() {


        //Frente
        if(this.Front_texture != null)
        this.Front_texture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.aresta / 2);

        this.quad.display();
        this.scene.popMatrix();

        //Trás
        if(this.Back_texture != null)
        this.Back_texture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -this.aresta / 2);
        this.scene.rotate(180 * DEGREE_TO_RAD, 0, 1, 0);

        this.quad.display();
        this.scene.popMatrix();

        //Baixo
        if(this.Bottom_texture != null)
        this.Bottom_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, -this.aresta / 2, 0);
        this.scene.rotate(90 * DEGREE_TO_RAD, 1, 0, 0);

        this.quad.display();
        this.scene.popMatrix();

        //Cima
        if(this.Top_texture != null)
        this.Top_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, this.aresta / 2, 0);
        this.scene.rotate(-90 * DEGREE_TO_RAD, 1, 0, 0);

        this.quad.display();
        this.scene.popMatrix();

        //Direita
        if(this.Right_texture != null)
        this.Right_texture.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.aresta / 2, 0, 0);
        this.scene.rotate(90 * DEGREE_TO_RAD, 0, 1, 0);

        this.quad.display();
        this.scene.popMatrix();

        //Esquerda
        if(this.Left_texture != null)
        this.Left_texture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(-this.aresta / 2, 0, 0);
        this.scene.rotate(-90 * DEGREE_TO_RAD, 0, 1, 0);

        this.quad.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
    };
    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();
    };
    updateBuffers() {
    }
}