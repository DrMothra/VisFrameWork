/**
 * Created by DrTone on 04/12/2014.
 */
//Visualisation framework

//Init this app from base
function Framework() {
    BaseApp.call(this);
}

Framework.prototype = new BaseApp();

Framework.prototype.init = function(container) {
    BaseApp.prototype.init.call(this, container);
    //GUI
    this.guiControls = null;
    this.gui = null;
};

Framework.prototype.createScene = function() {
    //Create scene
    BaseApp.prototype.createScene.call(this);

    //Load example object
    var boxGeom = new THREE.BoxGeometry(10, 10, 10);
    var mat = new THREE.MeshLambertMaterial({color: 0xb5b5b5, transparent: false, opacity: 0.5});
    var box = new THREE.Mesh(boxGeom, mat);
    this.scene.add(box);
};

Framework.prototype.createGUI = function() {
    //GUI - using dat.GUI
    this.guiControls = new function() {

    };

    var gui = new dat.GUI();

    //Add some folders
    this.guiAppear = gui.addFolder("Appearance");
    this.guiData = gui.addFolder("Data");
    this.gui = gui;
};

Framework.prototype.update = function() {
    //Perform any updates

    BaseApp.prototype.update.call(this);
};

$(document).ready(function() {
    //Initialise app
    var container = document.getElementById("WebGL-output");
    var app = new Framework();
    app.init(container);
    app.createScene();
    app.createGUI();

    //GUI callbacks

    app.run();
});