<?php
session_start();
include('conexion.php');
$errors='';
if($_SERVER['REQUEST_METHOD']=='POST')
{
    echo 'hey im post';
    $email=filter_input(INPUT_POST,'usuario',FILTER_SANITIZE_STRING);
    $contraseña=filter_input(INPUT_POST,'contra',FILTER_SANITIZE_STRING); 
    // var_dump($_POST);

    $sql= "SELECT * FROM usuarios WHERE email = :email";
    $statement=$conexion->prepare($sql);
    $statement->bindParam(':email',$email);
    $statement->execute();
    $datos= $statement->fetchObject();
    var_dump($datos);
    if($datos!=false)
    {
        var_dump($contraseña);
        var_dump($datos->pass);
        if(password_verify($contraseña,$datos->pass)==true)
        {
            $_SESSION['usuario']=$usuario;
            header('Location: pagina-principal.php');
            return;    
        }
        else
            $errors='Usuario o contraseña incorrectos';
    }
    else
        $errors='Usuario o contraseña incorrectos';

}

else
{
    // header('direction: pagina-principal.php');
    // return;    
}

include('conexion.php');



?>




<?include('encabezado.php');?>


        <div class="container-fluid">

            <div class="row my-4 py-4">
                <div class="col-4"></div> <!--Relleno-->
                <div class="col-4 bg-light rounded border py-3">
                <form  method="POST">
                        <div class="display-4 mb-3">Log In</div>

                        <div class="form-group ">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" name="usuario" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div class="form-group mb-0">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" name="contra" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <a href="#"><button type="button" class="btn btn-link ">Forgot your password</button> </a>
                        <button type="submit" class="btn btn-primary btn-block my-2">Log in</button>
                </form>
    
               
               
                <a href="#"button type="button" class="btn btn-light btn-block rounded border">Create an account</a> 
             
                
                </div>
                <div class="col-4"></div>  <!--Relleno-->
                
                <div class="row">
                <?if($errors!= '')
                {
                    echo'<div class="alert alert-danger" role="alert">';
                    echo $errors;
                    echo'</div>';
                }?>


                </div>
            </div>

        </div>


        <?include('pie.php');?>