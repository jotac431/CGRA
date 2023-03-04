/**
 * MyForest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyForest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.NumberTrees = 25;
        this.initBuffers();
    }

    initBuffers() {
        this.axiom = "X"; // "X"; //
        this.ruleF = "FF"; // "FF"; //
        this.ruleX = [];
        this.ruleX[0] = "F[-X][X]F[-X]+X";
        this.ruleX[1] = "F[-X][x]+X";
        this.ruleX[2] = "F[+X]-X";
        this.ruleX[3] = "F[/X][X]F[\\X]+X";
        this.ruleX[4] = "F[\\X][X]/X";
        this.ruleX[5] = "F[/X]\\X";
        this.ruleX[6] = "F[^X][X]F[&X]^X";
        this.ruleX[7] = "F[^X]&X";
        this.ruleX[8] = "F[&X]^X";

        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        this.forest = [];
        for(var i = 0; i < this.NumberTrees; i++)
            this.forest[i] = new MyLSPlant(this.scene);

        // do initial generation
        for(var i = 0; i < this.NumberTrees; i++)
            this.forest[i].generate(
                this.axiom,
                {
                    "F": [this.ruleF],
                    "X": this.ruleX
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
    }

    display() {
        var k = 0;
        for(var i = 0; i < Math.sqrt(this.NumberTrees); i++)
            for(var j = 0; j < Math.sqrt(this.NumberTrees); j++){
                this.scene.pushMatrix();

                this.scene.translate(i + 1,0,j + 1);
                this.forest[k].display();

                this.scene.popMatrix();
                k++;
            }
    }
}