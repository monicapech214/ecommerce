<?php session_start();
//recuperar cookies
if(isset($_COOKIE['nombre']))
echo "<script> alert('Bienvenido: ". $_COOKIE['nombre']."'); </script>";
?>
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
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="login.php">Iniciar Sesión</a></li>
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
                    
                     <a href="mostrarmujer.php"> 
                         <img src="img/carritocompra.png" width="50px;"></a>

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
        <!-- Section-->
        <section class="py-5">
        <p>Damas</p>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                           
                            <img class="card-img-top" src="img\zapatos1.jpg" id="mujer1" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer1">Zapato comodo moda dama</h5>
                                    <!-- Product price-->
                                    <label  id="preciomujer1">$300</label>
                                   
                                </div>
                            </div>
                            <!-- Product actions-->
                          <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Zapato comodo moda dama">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="300">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapatos2.jpg" id="mujer2" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer2">Tacones negros y blancos</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                       
                                    </div>
                                    <!-- Product price-->
                                    <label  id="preciomujer2">$350</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Tacones negros y blancos">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="350">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapatos.3.jpg" id="mujer3" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer3">Sandalias de moda dama</h5>
                                    <!-- Product price-->
                                    <label  id="preciomujer3">$200</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Sandalias de moda dama">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="200">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapato4.jpg" id="mujer4" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer4">Zapatos azules de vestir Dama</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        
                                    </div>
                                    <!-- Product price-->
                                    <label  id="preciomujer4">$250</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Zapatos azules de vestir Dama">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="250">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapatos5.jpg" id="mujer5" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer5">Tacones cafés elegantes</h5>
                                    <!-- Product price-->
                                    <label  id="preciomujer5">$275</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Tacones cafés elegantes">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="275">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapatos6.jpg" id="mujer6" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer6">Tacones #10</h5>
                                    <!-- Product price-->
                                    <label  id="preciomujer6">$380</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Tacones #10">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="380">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapatos7.jpg" id="mujer7" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer7">Sandalias de dama cuero</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        
                                    </div>
                                    <!-- Product price-->
                                    <label  id="preciomujer7">$370</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Sandalias de dama cuero">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="370">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="img\zapatos8.jpg" id="mujer8" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder" id="descripcionmujer8">Zapatos de dama plataforma</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                       
                                    </div>
                                    <!-- Product price-->
                                    <label  id="preciomujer8">$260</label>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <form action="icashop.php" method="POST">
                              <input type="hidden" name ="txtproducto" value= "Zapatos de dama plataforma">
                         <input type="number" name="cant" value="1" style="width;50px;"><br>
                         <input type="hidden" name ="txtprecioproducto" value="260">
                         <input type="submit" value ="Agregar" name="btnAgregar">
                            </form>
                            <?php
           if(isset($_REQUEST["btnAgregar"]))
           {
               $producto = $_REQUEST["txtproducto"];
               $cantidad = $_REQUEST["cant"];
               $precioprod = $_REQUEST["txtprecioproducto"];

               $_SESSION["carrito"][$producto]["cant"]= $cantidad;
               $_SESSION["carrito"][$producto]["precio"]= $precioprod;
               echo"<script>alert('Se agrego al carrito');</script>";
           }
           ?>
                        </div>
                    </div>
                </div>
            </div>     
        </section>
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
