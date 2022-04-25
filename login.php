<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/login.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <title>Iniciar Sesión</title>
</head>
<body>
<form action="icashop.php"  method="post"  style=" width: 50vw; margin-left : 25vw;">

<div class="entradas"style="text-align: center;">
    <input type="text" id="nombre" name="nombre" class="textbox" placeholder="Nombre usuario"> <br><br>

    <input type="text" id="password" name="password" class="textbox" placeholder="password"> 
  </div>
    </form>
    <?php 

//cookies
$name_cookie="nombre";
$value_cookie="moni";

setcookie($name_cookie,$value_cookie,time()+(60*60));
echo '<br>';
echo '<br>';
echo '<div style="text-align: center;">';
echo '<a type="submit" href="icashop.php" >Iniciar Sesión</a>';
echo '</div>';

?>
</body>
</html>