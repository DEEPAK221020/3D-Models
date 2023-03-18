'use strict';

/* global THREE */

function main(id , glbname) {
    
 const canvas = document.querySelector(id);
//  const canvas =  document.getElementById(id);

  let renderer = new THREE.WebGLRenderer({canvas: canvas , antialias: true,});
//   renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
//   renderer.autoClear = true;

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enablePan = false;
  controls.enableZoom = true;
  
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#666362');

{
  const light = new THREE.AmbientLight(0xFFFFFF,3); // soft white light
scene.add( light );
}


  {
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(1, 0, 1);
    scene.add(light);
    scene.add(light.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.8;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
      

      
      var loadingManager = new THREE.LoadingManager();
var loadingScreen = document.getElementById("loading-screen");

loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {

 console.log('Loading started');


};

loadingManager.onProgress = function ( item, loaded, total ) {

};
loadingManager.onLoad = function(){
   // Remove the loading screen 
//   progressBar.style.width = Math.round(100) + "%";
   loadingScreen.style.display = 'none';
};

// End

      console.log('helloo loaders');
      
    let gltfLoader = new THREE.GLTFLoader(loadingManager);
   
let root 

	function onLoad(gltf){

// loadingmanager();

       root = gltf.scene;
    //    const mesh = root.children[0]
      scene.add(root);

       const box = new THREE.Box3().setFromObject(root);

	   const boxSize = box.getSize(new THREE.Vector3()).length();
	   const boxCenter = box.getCenter(new THREE.Vector3());  

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();
   
	//   loadingManager.itemEnd(glbname);

  // release the resources used by the first model

  root.traverse((object) => {
    if (object.isMesh) {
      object.geometry.dispose();
      object.material.dispose();
    }
  });

//   gltfLoader.dispose();

	}

	function onUnload() {
  if (root) {
	// gltfLoader.dispose();
	  scene.remove(root); 
	//   root.geometry.dispose();
	//   root.material.dispose(); 
	  root = null;
	  scene.dispose();
  }  
//   canvas = null ;
//   renderer = null ;
// renderer.dispose();
  renderer = null ;
  gltfLoader=null;
}

	gltfLoader.load(glbname , onLoad);
	console.log(THREE.REVISION);

	window.addEventListener('beforeunload', onUnload);
 
	const removeButton = document.getElementById('mymodal2');
removeButton.addEventListener('click', onUnload);

  }

  if(renderer===null){
	console.log('nothing found at renderer');
}
else
  {

  function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = canvas.clientWidth;
  var height = canvas.clientHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    
    renderer.setSize(width, height, false);
  }
  return needResize;
}

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  const loop =()=>{
	controls.update();
	renderer.render(scene,camera);
	window.requestAnimationFrame(loop);
  }
  loop();
  
//   const t1 = gsap.timeline({defaults: {duration:1}})
//   t1.fromTo(mesh.scale, {z:0 ,x:0 , y:0} , {z:1 , x:1 , y:1})
//   t1.fromTo("nav" , {y:"-100%"} , {y:"0%"})
//   t1.fromTo(".title" , {opacity:0} , {opacity:1})

  
  }

}


// External Function for modal view

console.log('hello peter2');

(function($) {
    $(document).ready(function() {
   
	const EDSj = [ '0 ', ' 1',  '2', '3',					
    "./glb/grenade_launcher.glb",
    "./glb/p6-atav.glb",
    "./glb/starship_troopers_armor.glb",
							];
  
    // main('#ca3d' , './glb/Aam Doi_85gm.glb');
    // console.log("hello world2");
    
    for (var i = 4; i< 43; i++) {
        
        console.log(`#ca3d${i}` , `${EDSj[i]}`);
         console.log("hello world");
        main(`#ca3d${i}` , `${EDSj[i]}`);
        
        
    }
    console.log(EDSj[i]);

});
})(jQuery);



function myFnt(id , glbname){
	// alert('heelo world');
	// console.log(id);
	main(id , glbname);
}


function myclose(){

console.log('not done yet');

}