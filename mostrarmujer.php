<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>IcaShop Página Principal</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="icashop.php">IcaShop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Iniciar Sesión</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Acerca de</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="historia.php">Historia</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="misionyvision.php">Misión y Visión</a></li>
                                <li><a class="dropdown-item" href="contactanos.php">Contáctanos</a></li>                 
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="icashop.php">Damas</a></li>
                                <li><a class="dropdown-item" href="caballeros.php">Caballeros</a></li>
                                <li><a class="dropdown-item" href="ninos.php">Niños</a></li>
                                
                            </ul>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
        <!-- Header-->
        <header class="p-3 mb-2 bg-info text-white">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">IcaShop</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Los zapatos de tu estilo!</p>
                </div>
            </div>
            
        </header>
        
        <?php
        $total = 0;
        echo "<h3>Carrito de Compras:</h3>";
      if(isset($_SESSION["carrito"]))
      {
          foreach($_SESSION["carrito"] as $indice => $arreglo)
          {
              echo "<hr>Producto: <strong>".$indice."</strong><br>";
             $total += $arreglo["cant"] * $arreglo["precio"];
              foreach($arreglo as $key => $value)
              {
                  echo $key .": " . $value . "<br>";

              }
              echo"<a href='mostrarmujer.php?quitar=$indice'>Quitar de carrito</a>";
          } 
          echo '<br>';
          echo '<br>';
          echo '<br>';
          echo ' <form action="mostrarmujer.php" method="POST">';
          echo '<div style="text-align: center;">';
          echo '<input style="background: #02AC66" type="submit" value ="Pagar" name="btnPagar">';
          echo '</div>';
          echo '</form>';
          if(isset($_REQUEST["btnPagar"]))
          {
          echo "<h3>El total de su compra es:$ $total </h3>";
          }
          echo '<a href ="mostrarmujer.php?vaciar=true">Vaciar el carrito</a>';
         
        }
      else
      {
          echo"<script>alert('El carrito esta vacio');</script>";
         
         ?>
            <a href="icashop.php">Regresar</a>
          
          <?php
      }
if(isset($_REQUEST["vaciar"]))
{
    session_destroy();
   
   print "<script>window.setTimeout(function() { window.location = '/ecommerce/mostrarmujer.php' }, 3000);</script>";

}
if(isset($_REQUEST["quitar"]))
{
    $producto=$_REQUEST["quitar"];
    unset($_SESSION["carrito"][$producto]);
    print "<script>window.setTimeout(function() { window.location = '/ecommerce/mostrarmujer.php' }, 3000);</script>";
}
       ?>
        <!-- Section-->
        <section class="py-5">
       
    </section>
    <br>
    <br>
    <br>
    <br>
    <br>
        <!-- Footer-->
        <footer class="p-3 mb-2 bg-info text-white">
            <div class="container"><p class="m-0 text-center text-white">Derechos Reservados &copy; IcaShop 2022</p></div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
    </body>
</html>
