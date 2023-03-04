//From https://github.com/EvanHahn/ScriptInclude
var DEGREE_TO_RAD = Math.PI / 180;

include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

serialInclude(['../lib/CGF.js','MyScene.js', 'MyInterface.js', 'Plane.js',
//Primitives
'Primitives/MySphere.js',
'Primitives/MyCylinder.js',
'Primitives/MyUnitCubeQuad.js',
'Primitives/MyCone.js',
'Primitives/MyTriangle.js',
'Primitives/MyQuad.js',
'Primitives/MyTerrain.js',
'Primitives/MyRectangle.js',
'Primitives/MyDiamond.js',
'Primitives/MyCubeMap.js',
'Primitives/myPrism.js',
'Primitives/MyPyramid.js',
//Objects
'Objects/MyBird.js',
'Objects/MyWingRight.js',
'Objects/MyBody.js',
'Objects/MyNest.js',
'Objects/MyTreeBranch.js',
'Objects/MyForest.js',
'Objects/MyBranch.js',
'Objects/MyLeaf.js',
'Objects/MyHouse.js',
'Objects/MyWingLeft.js',
//LS
'LS/MyLSystem.js',
'LS/MyLightning.js',
'LS/MyLsPlant.js',




main=function()
{
    var app = new CGFapplication(document.body);
    var myScene = new MyScene();
    var myInterface = new MyInterface();

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);

    app.run();
}

]);