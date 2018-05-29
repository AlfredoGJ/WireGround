
<!doctype html>
<html lang="en">
  <head>
    <title>WireGround-Home</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>


  
  <body>





    <!-- Barra de navegacion -->
        <nav class="navbar navbar-expand-sm navbar-light bg-light text-right py-3">
          
            <!-- Marca -->
            <a class="navbar-brand" href="index.php">
                <img src="Imagenes/wg-logo.png" class="img-fluid" alt="logo" width="240">
            </a>
           

            <!-- Boton de colapsado -->
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
           
            <!-- Contenido colapsable -->
            <div class="collapse navbar-collapse " id="collapsibleNavId">
                
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
                    
                </ul>
                
            </div>

            <ul class="nav navbar-nav navbar-right">

                <a type="button"  id="register" class="btn btn-primary mx-2 d-none" href="register.php">Register</a>
                <a type="button" id="login" class="btn btn-warning mx-2 d-none" href="login.php">Login</a>

                <button type="button" id="perfil" class="btn btn-default" href="perfil.php" >
                   <i class="fa fa-user-o" aria-hidden="true"></i> Perfil
                </button>
                <a name="" id="cerrar" class="btn btn-link" href="logout.php" role="button">Cerrar sesion</a>
               
                
            </ul>

            
        </nav>  

        <nav class="relleno " >
            
        </nav>

   
        <!-- Barra de navegacion -->



    <?php
        session_start();
        // var_dump($_SESSION);
        if(isset($_SESSION['usuario']))
        {
            echo '<script type="text/javascript" src="wg.js">',
            '</script>',
            '<script>',
            'onSessionOpened();',
            '</script>';
        }
        else
        {
            echo '<script type="text/javascript" src="wg.js">',
            '</script>',
            '<script>',
            'onSessionClosed();',
            '</script>';
        }



?>
