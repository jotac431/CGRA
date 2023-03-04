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

        //Initialize scene objects
        this.initObjects();
        //Initialize materials
        this.initMaterials();
        //Initialize textures
        this.initTextures();
        //Objects connected to MyInterface
        this.initInterface();
    }
    initInterface() {
        this.displayAxis = true;
        this.displayTextures = true;
        this.selectedLight = 0;

    }
    initObjects() {
        this.axis = new CGFaxis(this);
        this.house = new MyHouse(this);
        this.bonfire = new MyBonfire(this);
        this.terrain = new MyQuad(this, 175, [0, 175, 175, 175, 0, 0, 175, 0]);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.cubemap = new MyCubeMap(this);
        this.voxel = new MyVoxelHill(this, 4);
    }
    initMaterials() {
        //Terrain material (green)
        this.greenMaterial = new CGFappearance(this);

        this.greenMaterial.setAmbient(0.2, 0.3, 0.1, 1.0);
        this.greenMaterial.setDiffuse(0.2, 0.3, 0.1, 1.0);
        this.greenMaterial.setSpecular(0, 0, 0, 1.0);
        this.greenMaterial.setShininess(10.0);

        //cubeMap material
        this.cubeMap_material = new CGFappearance(this);

        this.cubeMap_material.setAmbient(0.5, 0.5, 0.7, 1.0);
        this.cubeMap_material.setDiffuse(0.5, 0.5, 0.7, 1.0);
        this.cubeMap_material.setSpecular(1, 1, 1, 1.0);
        this.cubeMap_material.setShininess(10.0);

        //mountains material
        this.mountainsMaterial = new CGFappearance(this);

        this.mountainsMaterial.setAmbient(0.6, 0.5, 0.5, 1.0);
        this.mountainsMaterial.setDiffuse(0.6, 0.5, 0.5, 1.0);
        this.mountainsMaterial.setSpecular(0, 0, 0, 1.0);
        this.mountainsMaterial.setShininess(10.0);
    }
    initTextures() {
        //Terrain texture
        this.grassTexture = new CGFtexture(this, 'images/grass.jpg');

        this.greenMaterial.setTexture(this.grassTexture);
        this.greenMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //cubeMap textura
        this.cubeMapTexture = 'images/day.jpg';
        this.cubeMap_textureDay = new CGFtexture(this, 'images/day.jpg');
        this.cubeMap_textureNight = new CGFtexture(this, 'images/night.jpg');

        this.cubeMap_material.setTexture(this.cubeMap_textureDay);

        //Mountain texture
        this.mountainTexture = new CGFtexture(this, 'images/mountains.jpg');

        this.mountainsMaterial.setTexture(this.mountainTexture);
    }
    initLights() {
        this.setGlobalAmbientLight(0.5, 0.5, 0.5, 1.0);

        this.lights[0].setPosition(10, 99, 20, 1);
        //this.lights[0].setAmbient(1, 0.9, 0.6, 1.0);
        this.lights[0].setDiffuse(1, 0.9, 0.6, 1.0);
        this.lights[0].setConstantAttenuation(0.5);
        this.lights[0].disable();

        this.lights[1].setPosition(10, 100, 20, 1);
        //this.lights[1].setAmbient(0.5, 0.5, 1, 1.0);
        this.lights[1].setDiffuse(0.5, 0.5, 1, 1.0);
        this.lights[1].setConstantAttenuation(1);
        this.lights[1].disable();

        this.lights[2].setPosition(6, 0, 6, 1);
        this.lights[2].setDiffuse(1, 0.5, 0, 1.0);
        this.lights[2].setVisible(true);
        this.lights[2].setConstantAttenuation(3);
        this.lights[2].disable();

        this.lightsIDs = { 'Day': 0, 'Night': 1, 'Fire': 2 };
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, 20, 50), vec3.fromValues(5, 5, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    updateLights() {
        for (var i = 0; i < 3; i++) {
            if (this.selectedLight == i) {
                this.lights[i].enable();
                this.lights[i].update();
            }
            else {
                this.lights[i].disable();
                this.lights[i].update();
            }
        }
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

        this.enableTextures(this.displayTextures);

        this.updateLights();

        if (this.selectedLight == 2)
            this.bonfire.UpdateTextures(true);
        else
            this.bonfire.UpdateTextures(false);

        if (this.selectedLight == 0 && this.cubeMapTexture == 'images/night.jpg'){
            this.cubeMapTexture = 'images/day.jpg';
            this.cubeMap_material.setTexture(this.cubeMap_textureDay);
        } else if(this.cubeMapTexture == 'images/day.jpg' && this.selectedLight != 0){
            this.cubeMapTexture = 'images/night.jpg';
            this.cubeMap_material.setTexture(this.cubeMap_textureNight);
        }

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //this.voxel.display();



        this.sceneDisplay();
        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section


        // ---- END Primitive drawing section
    }
    sceneDisplay() {
        this.cubeMap_material.apply();
        this.cubemap.display();

        this.house.display();

        this.pushMatrix();
        this.translate(6, 0, 5.6);
        this.bonfire.display();
        this.popMatrix();



        for (var i = 6; i > -90; i = i - 6) {
            this.pushMatrix();
            this.translate(-5, 0, i);
            this.treeGroup.display();
            this.popMatrix();
        }

        for (var j = 1; j < 90; j = j + 6) {

            for (var i = -6; i > -90; i = i - 6) {
                this.pushMatrix();
                this.translate(j, 0, i);
                this.treeGroup.display();
                this.popMatrix();
            }
        }

        for (var i = 14; i < 89; i = i + 3) {
            this.pushMatrix();
            this.translate(i, 0, 2);
            this.rotate(DEGREE_TO_RAD * -90, 0, 1, 0);
            this.treeRow.display();
            this.popMatrix();
        }

        this.greenMaterial.apply();

        this.pushMatrix();
        this.rotate(DEGREE_TO_RAD * -90, 1, 0, 0);
        this.terrain.display();
        this.popMatrix();

        this.mountainsMaterial.apply();

        this.pushMatrix();
        this.translate(-30, 0, -30);
        this.voxel.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-30, 0, 0);
        this.voxel.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-30, 0, 30);
        this.voxel.display();
        this.popMatrix();
    }
}