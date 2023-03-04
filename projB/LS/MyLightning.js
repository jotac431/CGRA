/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.audio = new Audio('audio/lightning.mp3');
        this.grammar = {
            "F": new MyQuad(this.scene, 1),
            "X": new MyQuad(this.scene, 1)
        };

        this.Materials();

        this.axiom = "X"; // "X"; //
        this.ruleF = "FF"; // "FF"; //
        this.ruleX = [];
        this.ruleX[0] = "F[-X][X]F[-X]+FX";
        this.ruleX[1] = "F[+X][X]F-FX";
        this.ruleX[2] = "F[-X][X]F+FX";
        this.ruleX[3] = "[X]F[-X][X]F+FX";
        this.ruleX[4] = "[X]F[+X][X]F-FX";
        this.ruleX[5] = "F[-X][+F+X]X[X]";
        this.ruleX[6] = "F[+X][-F-X]X[X]";


        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lSystem = new MyLSystem(this.scene);

        this.strike = false;
        this.depth = 0;
        this.maxDepth = 0;
        this.start = 0;
        this.tempo_atual = 0;
        this.maxTime = 1000;
    }

    Materials(){

        this.lightningMaterial = new CGFappearance(this.scene);

        this.lightningMaterial.setAmbient(1, 1, 1, 1.0);
        this.lightningMaterial.setDiffuse(1, 1, 1, 1.0);
        this.lightningMaterial.setSpecular(1, 1, 1, 1.0);
        this.lightningMaterial.setShininess(10.0);
    }

    doGenerate(){
        this.lSystem.generate(
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

    display(){
        if(this.depth > 0){

            this.lightningMaterial.apply();

            this.scene.pushMatrix();
            this.scene.rotate(DEGREE_TO_RAD* 180, 0,0,1);
            this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

            var i;
            this.displayed = 0;
            this.pushed = 0;

            // percorre a cadeia de caracteres
            for (i=0; i<this.lSystem.axiom.length; ++i){

                //verifica se já deu display até depht e dá break
                if(this.displayed >= this.depth){
                    for(var j = 0; j < this.pushed; j++)
                        this.scene.popMatrix();
                    break;
                }
                
                // verifica se sao caracteres especiais
                switch(this.lSystem.axiom[i]){
                    case "+":
                        // roda a esquerda
                        this.scene.rotate(this.lSystem.angle, 0, 0, 1);
                        break;

                    case "-":
                        // roda a direita
                        this.scene.rotate(-this.lSystem.angle, 0, 0, 1);
                        break;

                    case "[":
                        // push
                        this.scene.pushMatrix();
                        this.pushed++;
                        break;

                    case "]":
                        // pop
                        this.scene.popMatrix();
                        this.pushed--;
                        break;

                    // processa primitiva definida na gramatica, se existir
                    default:
                        var primitive=this.grammar[this.lSystem.axiom[i]];

                        if ( primitive )
                        {
                            this.scene.pushMatrix();
                            this.scene.scale(0.1,1,1);
                            primitive.display();
                            this.scene.popMatrix();
                            this.scene.translate(0, 0.9, 0);
                            this.displayed++;
                        }
                        break;
                }
            }
            this.scene.popMatrix();
        }  
    }

    getMaxDepth(){
        for(var i = 0; i < this.lSystem.axiom.length; i++)
            if(this.lSystem.axiom[i] == "X" || this.lSystem.axiom[i] == "F")
                this.maxDepth++;
    }

    startAnimation(time){
        this.depth = 0;
        this.tempo_atual = 0;
        this.start = time;

        this.doGenerate();
        this.getMaxDepth();
    }

    update(time){
        if (this.scene.gui.isKeyPressed("KeyL") && !this.strike) {
            this.audio.play();
            this.startAnimation(time);
            this.strike = true;
        } else if(this.depth >= this.maxDepth && !this.scene.gui.isKeyPressed("KeyL")){
            //elimina o relampago
            this.strike = false;
            this.depth = 0;
            this.maxDepth = 0;
        } else{
            //atualiza tempo que já passou desde que se iniciou relampago
            this.tempo_atual = time - this.start;
            this.depth = this.tempo_atual/(this.maxTime/this.maxDepth);
        }
    }
}