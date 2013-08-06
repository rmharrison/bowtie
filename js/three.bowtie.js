var container;
var camera, scene, renderer, controls;
var geometry, material, mesh, bow, bowGeometry;

var oldNeckWidth = App.BowTie.necksize;
var UPDATEBOWTIE = false;
init();
animate();

function init() {
    //Set size of bow tie area relative to total window
    //TODO: Figure out a way to not have this as a magic number
    var clientWidthScale = 0.63;
    var clientHeightScale = 0.3;


    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.0001, 1000 );
    //var width = 100;
    //var height = 100;
    //camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 10, 1000 )
    //camera.up = new THREE.Vector3(0,1,0);
    //camera.lookAt(new THREE.Vector3(100, 10, 100));
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 16;

    scene = new THREE.Scene();

    //geometry = new THREE.CubeGeometry( 10, 10, 10 );
    //material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    //mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );


      var bowDepth = 0.125;
      var bowWidth = 8;
      var bowPoint = 0.0;
      var bowneckTransitionWidth = 1;
      var bowHeight = 2.5;
      var neckWidth = App.BowTie.necksize; //Default 15.5
      var neckHeight = 0.75;

      bowGeometry = getBowGeometry(bowDepth, bowWidth, bowPoint, bowneckTransitionWidth, bowHeight, neckWidth, neckHeight);
      bowGeometry.dynamic = true;
      
      var materialFront = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
      var materialSide = new THREE.MeshBasicMaterial( { color: 0xff8800 } );
      var materialArray = [ materialFront, materialSide ];
      var bowMaterial = new THREE.MeshFaceMaterial(materialArray);
      
      bow = new THREE.Mesh( bowGeometry, bowMaterial );
      bow.position.set(0,0,-1);
      scene.add(bow);
      
      // add a wireframe to model
      var wireframeTexture = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, transparent: false } ); 
      bow = new THREE.Mesh( bowGeometry, wireframeTexture );
      bow.position.set(0,0,-1);
      scene.add(bow);

    // axes
    scene.add( new THREE.AxisHelper(12) );

    renderer = new THREE.CanvasRenderer();

    //WebGL Doesn't work on my home laptop on either Firefox or Chrome.
    //renderer = new THREE.WebGLRenderer( {antialias:true} );
    renderer.setSize( clientWidthScale*window.innerWidth, clientHeightScale*window.innerHeight );

    container = document.getElementById( 'ThreeJS' );
    container.appendChild( renderer.domElement );

    // CONTROLS
    controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame( animate );
    render();
}

function render() {
/*
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02;
*/
      var bowDepth = 0.125;
      var bowWidth = 8;
      var bowPoint = 0.0;
      var bowneckTransitionWidth = 1;
      var bowHeight = 2.5;
      var neckWidth = App.BowTie.necksize; // Default 15.5
      var neckHeight = 0.75;

      //Necksize
      if(oldNeckWidth != neckWidth) {
        UPDATEBOWTIE = true;
        oldNeckWidth = neckWidth;
      } 

      if (App.BowTie.size == "Standard") {
        bowHeight = 2.5;
        UPDATEBOWTIE = true;
      } else if (App.BowTie.size == "Jumbo") {
        bowHeight = 4.0;
        UPDATEBOWTIE = true;
      } else if (App.BowTie.size == "Slim") {
        bowHeight = 1.5;
        UPDATEBOWTIE = true;
      } else {
        UPDATEBOWTIE = false;
      }

      if (App.BowTie.style == "Classic") {
        bowPoint = 0.0;
        //UPDATEBOWTIE = true;
      } else if (App.BowTie.style == "Batwing") {
        bowPoint = 0.0;
        UPDATEBOWTIE = true;
      } else if (App.BowTie.style == "Diamond Point") {
        bowPoint = 1.0;
        UPDATEBOWTIE = true;
      } else {
        UPDATEBOWTIE = false;
      }

      if(UPDATEBOWTIE) {
        newGeometry = getBowGeometry(bowDepth, bowWidth, bowPoint, bowneckTransitionWidth, bowHeight, neckWidth, neckHeight);

        var i, il, x, y , z;
        for ( i = 0, il = newGeometry.vertices.length; i < il; i ++ ) {
          x = newGeometry.vertices[i].x; 
          y = newGeometry.vertices[i].y; 
          z = newGeometry.vertices[i].z; 
          bowGeometry.vertices[ i ].set(x,y,z);
        }

        bowGeometry.verticesNeedUpdate = true;
        //bowGeometry.elementsNeedUpdate = true;
        //bowGeometry.morphTargetsNeedUpdate = true;
        //bowGeometry.uvsNeedUpdate = true;
        //bowGeometry.normalsNeedUpdate = true;
        //bowGeometry.colorsNeedUpdate = true;
        //bowGeometry.tangentsNeedUpdate = true;
        UPDATEBOWTIE = false;
  }
    controls.update();
    renderer.render( scene, camera );

}

//Returns Geometry
function getBowGeometry(bowDepth, bowWidth, bowPoint, bowneckTransitionWidth, bowHeight, neckWidth, neckHeight) {
    /*
      ========                 ========
      ================|================
      ========                 ========
    32inch long - 8" bow + 16" neck + 8" bow
    2.5" bow width
    | 0,0
    0.75" in width
    start points from top-left of bow tie
    */
      /*
      //Top-left
      bowPoints.push( new THREE.Vector2 (   -16,  0.5*bowHeight ) );
      bowPoints.push( new THREE.Vector2 (   -9,  0.5*bowHeight ) );
      bowPoints.push( new THREE.Vector2 (  -8,  0.5*neckHeight ) );

      //Top-right
      bowPoints.push( new THREE.Vector2 (  8,  0.5*neckHeight ) );
      bowPoints.push( new THREE.Vector2 (   9,  0.5*bowHeight ) );
      bowPoints.push( new THREE.Vector2 (   16,  0.5*bowHeight ) );

      //Bottom-right
      bowPoints.push( new THREE.Vector2 (   16,  -0.5*bowHeight ) );
      bowPoints.push( new THREE.Vector2 (   9,  -0.5*bowHeight ) );
      bowPoints.push( new THREE.Vector2 (  8,  -0.5*neckHeight ) );

      //Bottom-left
      bowPoints.push( new THREE.Vector2 (  -8,  -0.5*neckHeight ) );
      bowPoints.push( new THREE.Vector2 (   -9,  -0.5*bowHeight ) );
      bowPoints.push( new THREE.Vector2 (   -16,  -0.5*bowHeight ) );

      //Close-up
      bowPoints.push( new THREE.Vector2 (   -16,  0.5*bowHeight ) );
      */

    var bowPoints = [];
    //Top-left
    bowPoints.push( new THREE.Vector2 (  -(0.5*neckWidth+bowWidth),  0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (  -(0.5*neckWidth+bowneckTransitionWidth),  0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (  -0.5*neckWidth,  0.5*neckHeight ) );

    //Top-right
    bowPoints.push( new THREE.Vector2 (  0.5*neckWidth,  0.5*neckHeight ) );
    bowPoints.push( new THREE.Vector2 (   0.5*neckWidth+bowneckTransitionWidth,  0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (   0.5*neckWidth+bowWidth,  0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (   0.5*neckWidth+bowWidth+bowPoint,  0.0 ) ); //Point

    //Bottom-right
    bowPoints.push( new THREE.Vector2 (   0.5*neckWidth+bowWidth,  -0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (   0.5*neckWidth+bowneckTransitionWidth,  -0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (  0.5*neckWidth,  -0.5*neckHeight ) );

    //Bottom-left
    bowPoints.push( new THREE.Vector2 (  -0.5*neckWidth,  -0.5*neckHeight ) );
    bowPoints.push( new THREE.Vector2 (   -(0.5*neckWidth+bowneckTransitionWidth),  -0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (   -(0.5*neckWidth+bowWidth),  -0.5*bowHeight ) );
    bowPoints.push( new THREE.Vector2 (   -(0.5*neckWidth+bowWidth+bowPoint),  0.0 ) ); //Point

    //Close-up
    bowPoints.push( new THREE.Vector2 (   -(0.5*neckWidth+bowWidth),  0.5*bowHeight ) );

    var bowShape = new THREE.Shape( bowPoints );
    var extrusionSettings = {
      bevelEnabled: false, amount: bowDepth,
    };
    geometry = new THREE.ExtrudeGeometry( bowShape, extrusionSettings );
    return geometry;
}
