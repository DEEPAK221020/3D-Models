<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Project</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">

    <script src="https://threejsfundamentals.org/threejs/resources/threejs/r105/three.min.js"></script>
<script src="https://threejsfundamentals.org/threejs/resources/threejs/r105/js/controls/OrbitControls.js"></script>
<script src="https://threejsfundamentals.org/threejs/resources/threejs/r105/js/loaders/GLTFLoader.js"></script>
<script src="https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

</head>

<body>

<!-- Modal -->

	<!-- part 1 -->

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" >
    <div class="modal-content" style = "width:100%; height:80vh;">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"> 3D Models </h1>
        <button type="button" class="btn-close" id="mymodal2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
          <!--Loader-->
          
<div id="loading-screen">
     <div class="d-flex justify-content-center">
      <!--<div id="loading-message">Loading...</div>-->
  <div class="spinner-border" role="status">
    <!-- <span class="sr-only">Loading...</span> -->
  </div>
</div>
    
</div> 

      <canvas id="ca3d2"style=" width:100%;">  </canvas>
      </div>
    </div>
  </div> 
</div>



<nav class="navbar bg-body-tertiary">
  <div class="container-fluid d-flex justify-content-center align-item-center text-center">
    <a class="navbar-brand" href="#">
      3D Designs 
    </a>
  </div>
</nav>


<div class="container my-contain ">
    <div class="row myrow "> 


        <?php   for ($x = 4; $x <=6; $x++) { 
							
							
							$EDS = array("0 ", " 1", " 2", "3 ",
							"./glb/grenade_launcher.glb",
							"./glb/p6-atav.glb",
							"./glb/starship_troopers_armor.glb",
							);
							
							
							
							$imgs = array("0", "1" , "2" , "3" ,
							       "./3dimage/grenade_launcher.jpg",
							       "./3dimage/p6-atav.jpg",
							       "./3dimage/starship_troopers_armor.jpg",
							       );
							
							
							
							?>
  <!--echo "The number is: $x <br>";-->
  
  
  <div class="col-4 mycol">
  <article class="cbp-item vlt-portfolio-grid-item vlt-portfolio-style2 portfolio_category-3D">
							<div class="vlt-portfolio-grid-image pic " id="pic-6">
									<!-- <img src="./assets/img/gallery/HB_Branding_2.jpg" id="output_img" alt=""> -->
									<div class="launch EDMODEL">
									    
									    <img src="<?php echo $imgs[$x]; ?>" id="canva" alt="" style=" width:100%; height:auto;"> 

									<!--<canvas id="<?php echo '#ca3d'.$x ; ?>" style="display:block; width:100%; height:90%;" >   </canvas>-->
										 
									<button type="button" class="btn btn-transparent btns EDMODELbtn" data-bs-toggle="modal" id="btnindex"  data-bs-target="#staticBackdrop" onclick = "myFnt('#ca3d2' , '<?php echo $EDS[$x]; ?>')" >
   3D View
</button>
									</div>

								</div>
							</article>
                            </div>
<?php  }   ?>


    </div>
</div>							

<!-- Footer -->

<nav class="navbar bg-body-tertiary footer">
  <div class="container-fluid d-flex justify-content-center align-item-center text-center">
    <a class="navbar-brand" href="#">
      Designed & Developed By Deepak
    </a>
  </div>
</nav>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>

<script src="script.js"></script>

</body>
</html>