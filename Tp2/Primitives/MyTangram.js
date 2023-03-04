/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
		this.initBuffers();
    }

    initBuffers() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
	}
    
	display() {    
        var translate =[
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, -1.825, 0, 1
        ];
        if (this.scene.displayTriangleBig)
            this.triangleBig.display();

        this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(2)/2.4, -Math.sqrt(2), 0);
            this.scene.rotate(45*DEGREE_TO_RAD,0,0,1);

            if (this.scene.displayTriangleBig)
                this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.multMatrix(translate);

            if (this.scene.displayDiamond)
                this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-2,-2*Math.sqrt(2),0);
            this.scene.rotate(180*DEGREE_TO_RAD,0,1,0);
            this.scene.rotate(45*DEGREE_TO_RAD,0,0,1);

            if (this.scene.displayParallelogram)
                this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(1)/1.4145,2 + Math.sqrt(1)/1.4145,0);
            this.scene.rotate(-135*DEGREE_TO_RAD,0,0,1);

            if (this.scene.displayTriangleSmall)
                this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(Math.sqrt(1)/5,-3.025,0);
            this.scene.rotate(135*DEGREE_TO_RAD,0,0,1);

            if (this.scene.displayTriangleSmall)
                this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-Math.sqrt(1)/1.4145,2+Math.sqrt(1)/1.4145,0);
            this.scene.rotate(-90*DEGREE_TO_RAD,0,0,1);

            if (this.scene.displayTriangle)
                this.triangle.display();
        this.scene.popMatrix();
	}
}