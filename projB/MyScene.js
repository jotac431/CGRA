/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        
        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);
        this.initObjects();
        this.Materials();
        this.Textures();
        
        this.speedFactor = 0.1;
        this.scaleFactor = 1;
    }
    initObjects() {
        this.axis = new CGFaxis(this);
        this.terrain = new MyTerrain(this, 32, 100, 'images/terrain2.jpg', 'images/heightmap2.jpg', 'images/altimetry.png');
        this.lightning = new MyLightning(this);
        this.nestPosition = [];
        this.nestPosition.x = 1.7;
        this.nestPosition.y = 4;
        this.nestPosition.z = 11.5;
        this.bird = new MyBird(this, this.nestPosition);
        this.nest = new MyNest(this, this.nestPosition);
        this.treeBranch = [];
        this.treeBranch[0] = new MyTreeBranch(this, 5, 3.8, 5,true);
        this.treeBranch[1] = new MyTreeBranch(this, 5, 3.8, -5,true);
        this.treeBranch[2] = new MyTreeBranch(this, -5, 3.8, 13,true);
        this.treeBranch[3] = new MyTreeBranch(this, -5, 3.8, -5,true);

        this.forest = new MyForest(this);
        this.house = new MyHouse(this);
        this.cubemap = new MyCubeMap(this);

    }

    Materials() {

        //cubeMap material
        this.cubeMap_material = new CGFappearance(this);

        this.cubeMap_material.setAmbient(0.5, 0.5, 0.7, 1.0);
        this.cubeMap_material.setDiffuse(0.5, 0.5, 0.7, 1.0);
        this.cubeMap_material.setSpecular(1, 1, 1, 1.0);
        this.cubeMap_material.setShininess(10.0);
    }

	 Textures() {

        //cubeMap textura
        
        this.cubeMap_textureDay = new CGFtexture(this, 'images/day.jpg');
        this.cubeMap_material.setTexture(this.cubeMap_textureDay);
    }


    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
        }
        if (keysPressed)
            console.log(text);
    }
    
    update(t) {
        this.checkKeys();
        this.bird.updateMove(this.speedFactor, this.scaleFactor);
        this.nest.updateBranches(this.bird.updateTreeBranch(this.treeBranch, t));
        this.lightning.update(t);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.MyDisplay();
        // ---- END Primitive drawing section

    }


    MyDisplay() {


        this.pushMatrix();
        this.translate(10,20,0);
        this.scale(2, 2, 2);
        this.lightning.display();
        this.popMatrix();

        this.pushMatrix();
        this.bird.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10, 3.5, 0);
        this.forest.display();
        this.popMatrix();

       
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.terrain.display();
        this.popMatrix();

        
        this.nest.display();
        
        this.pushMatrix();
        this.translate(-9, 4, 2);
        this.scale(0.6, 0.6, 0.6);
        this.house.display();
        this.popMatrix();

        this.cubeMap_material.apply();
        
        this.pushMatrix();
        this.translate(0, 10, 0);
        this.scale(0.6, 0.6, 0.6);
        this.cubemap.display();
        this.popMatrix();
        

        for (var i = 0; i < this.treeBranch.length; i++) 
            this.treeBranch[i].display();
    }
}