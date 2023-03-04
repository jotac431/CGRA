/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyBird extends CGFobject {
    constructor(scene, nest) {
        super(scene);
        this.standardHeight = 10;
        this.scaleFactor = 1;
        //normal moves varaiables
        this.variable = 0;
        this.angle = 0;
        this.position = [];
        this.position.x = 0;
        this.position.y = this.standardHeight;
        this.position.z = 0;
        this.speed = 0;

        //nest varaiables
        this.nest = nest;
        this.wingAngle = 0;
        this.maxAngle = 30;
        this.treebranch = null;
        this.starTime = 0;
        this.time = 0;
        this.tryCatch = false;

        this.initBuffers();
        this.Materials();
        this.Textures();
    }

    initBuffers() {
        this.wingR = new MyWingRight(this.scene);
        this.wingL = new MyWingLeft(this.scene);
        this.body = new MyBody(this.scene);
    }

    Materials() {
    }

    Textures() {
    }

    display() {

        this.scene.pushMatrix();

        this.move();

        this.scene.pushMatrix();

        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        this.scene.scale(0.2, 0.2, 0.2);

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 1.5);
        this.moveWings(1);
        this.wingR.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 1.5);
        this.moveWings(-1);
        this.wingL.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.body.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        if (this.treebranch != null) {
            this.scene.pushMatrix();
            this.scene.translate(0, -0.3, 0);
            this.scene.rotate(180 * DEGREE_TO_RAD, 1, 0, 0);
            this.treebranch.display();
            this.scene.popMatrix();
        }

        this.scene.popMatrix();
    }

    move() {
        this.scene.translate(this.position.x, this.position.y, this.position.z);
        this.scene.rotate(this.angle * DEGREE_TO_RAD, 0, 1, 0);
    }

    moveWings(wing) {
        this.scene.rotate(wing * this.maxAngle * Math.sin(this.wingAngle) * DEGREE_TO_RAD, 0, 0, 1);
    }

    updateMove(speedFactor, scaleFactor) {
        //horizontal move
        if (this.speed > 0) {
            this.position.x = this.position.x + Math.sin(this.angle * DEGREE_TO_RAD) * this.speed;
            this.position.z = this.position.z + Math.cos(this.angle * DEGREE_TO_RAD) * this.speed;
        }
        else if (this.speed < 0) {
            this.position.x = this.position.x + Math.sin(this.angle * DEGREE_TO_RAD) * this.speed;
            this.position.z = this.position.z + Math.cos(this.angle * DEGREE_TO_RAD) * this.speed;
        }

        if (!this.tryCatch) {
            this.scaleFactor = scaleFactor;

            this.variable = this.variable + 0.1 * speedFactor;
            //vertical move
            this.position.y = this.standardHeight + Math.sin(this.variable);
            //wings angle
            this.wingAngle = this.variable;

            if (this.scene.gui.isKeyPressed("KeyR")) {
                this.angle = 0;
                this.speed = 0;
                this.position.x = 0;
                this.position.y = this.standardHeight;
                this.position.z = 0;
                this.variable = 0;
                this.wingAngle = 0;
            }
            else {
                if (this.scene.gui.isKeyPressed("KeyA")) {
                    this.turn(speedFactor)
                }
                if (this.scene.gui.isKeyPressed("KeyD")) {
                    this.turn(-speedFactor)
                }
                if (this.scene.gui.isKeyPressed("KeyW")) {
                    this.accelerate(speedFactor);
                }
                if (this.scene.gui.isKeyPressed("KeyS")) {
                    this.accelerate(-speedFactor);
                }
            }
        }

    }

    turn(v) {
        this.angle = this.angle + 3 * v;
    }

    accelerate(v) {
        this.speed = this.speed + 0.1 * v;
    }

    updateTreeBranch(treebranch, t) {
        if (this.scene.gui.isKeyPressed("KeyP")) {
            this.tryCatch = true;
        }

        return this.branchMove(treebranch, t);
    }

    branchMove(treebranch, t) {
        if (this.tryCatch) {
            var returnedBranch = null;
            if (this.starTime == 0) {                                                   //check if it's the begining of the move
                this.starTime = t;
                if (this.treebranch == null) {                                          //check if going to branch heigh or nest heigh
                    if (treebranch.length > 0)
                        var position = treebranch[0].getPosition();
                    else {
                        var p = [];
                        p.x = 0;
                        p.y = 4;
                        p.z = 0;
                        var position = p;
                    }
                }
                else
                    var position = this.nest;

                var distance = this.position.y - position.y;
                this.v = distance / 1000;
                this.savePositionY = this.position.y;
            }
            this.time = t - this.starTime;
            if (this.time < 1000) {                                                     //go down movement
                this.position.y = this.savePositionY - (this.v * this.time);
            } else if (this.time < 2000) {                                              //go up movement
                if (this.treebranch == null) {                                          //catching branch
                    for (var i = 0; i < treebranch.length; i++) {
                        var position = treebranch[i].getPosition();
                        if (this.position.x < position.x + 1.5 && this.position.x > position.x - 1.5 &&
                            this.position.y < position.y + 1.5 && this.position.y > position.y - 1.5 &&
                            this.position.z < position.z + 1.5 && this.position.z > position.z - 1.5) {
                            this.treebranch = treebranch[i];
                            var p = [];
                            p.x = 0;
                            p.y = 0;
                            p.z = 0;
                            this.treebranch.updatePosition(p);
                            treebranch.splice(i, 1);
                        }
                    }
                } else {                                                                //Droping branch
                    if (this.position.x < this.nest.x + 1.5 && this.position.x > this.nest.x - 1.5 &&
                        this.position.y < this.nest.y + 1.5 && this.position.y > this.nest.y - 1.5 &&
                        this.position.z < this.nest.z + 1.5 && this.position.z > this.nest.z - 1.5) {
                        returnedBranch = this.treebranch;
                        this.treebranch = null;
                    }
                }
                this.position.y = this.savePositionY - (this.v * (2000 - this.time));
            } else {
                this.tryCatch = false;
                this.position.y = this.savePositionY;
                this.starTime = 0;
            }

            return returnedBranch;
        }
    }
}