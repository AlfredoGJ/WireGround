
<!doctype html>
<html lang="en">
  <head>
    <title>WireGround-Home</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
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
                    
                       

                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
                    
                </ul>
                
            </div>

            <ul class="nav navbar-nav navbar-right">

                <a type="button"  id="register" class="btn btn-primary mx-2 d-none" href="register.php">Register</a>
                <a type="button" id="login" class="btn btn-warning mx-2 d-none" href="login.php">Login</a>

                <a type="button" id="perfil" class="btn btn-default" href="perfil.php" >
                  <i class="far fa-user"></i> Perfil
                </a>

                <a name="" id="cerrar" class="btn btn-link" href="logout.php" role="button">Cerrar sesion</a>

                <button type="button" id="guardar" class="btn btn-info mx-2 d-none" href="perfil.php" onclick="saveDiagram()" >
                  <i class="far fa-save    "></i>    Guardar
                </button>
                
                <button type="button" id="cerrar" class="btn btn-danger mx-2 d-none" href="perfil.php" >
                  <i class="far fa-times-circle    "></i>    Cerrar
                </button>
                
                
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
        if(isset($_SESSION['onEditor']) && $_SESSION['onEditor']=='yes')
        {
            echo '<script type="text/javascript" src="wg.js">',
            '</script>',
            '<script>',
            'onEditingDiagram();',
            '</script>';
        }




?>
