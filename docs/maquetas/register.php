<?php
include('conexion.php');
$error='';

if($_SERVER['REQUEST_METHOD']=='POST')
{
    $email= filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
    $password= filter_input(INPUT_POST,'password',FILTER_SANITIZE_STRING); 
    $password2= filter_input(INPUT_POST,'password2',FILTER_SANITIZE_STRING);
    $username= filter_input(INPUT_POST,'username',FILTER_SANITIZE_STRING);
    $nacimiento= filter_input(INPUT_POST,'nacimiento',FILTER_SANITIZE_STRING);
    $nombre= filter_input(INPUT_POST,'nombre',FILTER_SANITIZE_STRING);
    $apaterno= filter_input(INPUT_POST,'apaterno',FILTER_SANITIZE_STRING);
    $amaterno= filter_input(INPUT_POST,'amaterno',FILTER_SANITIZE_STRING);
//  var_dump($_POST);
if( $email!=false)    
{
       
    if($password==$password2)
    {

        if(strlen($password)>7)
        {
            if(strlen($username)>4)
            {
                $sql= "SELECT * FROM usuarios WHERE username = :username";
                $statement=$conexion->prepare($sql);
                $statement->bindParam(':username',$username);
                $statement->execute();
                $datos= $statement->fetch();
                var_dump($datos);
                if($datos == false)
                {
                    $sql= "SELECT * FROM usuarios WHERE email= :email";
                    $statement=$conexion->prepare($sql);
                    $statement->bindParam(':email',$email);
                    $statement->execute();
                    $datos= $statement->fetch();       
                    // var_dump($datos);
                    if($datos==false)
                    {
                        $hashContraseña=password_hash($password,PASSWORD_DEFAULT);
                        // var_dump($hashContraseña);
                        $sql= 'INSERT INTO usuarios (nombre, nacimiento, email, username, pass, tipo_usuario) VALUES (:nombre, :nacimiento, :email, :username, :pass, :tipo_usuario)';
                        // var_dump($sql);
                        $statement=$conexion->prepare($sql);
                        // var_dump($statement);
                        $statement->bindParam(':nombre',$nombreCompleto);
                        $statement->bindParam(':nacimiento',$nacimiento);
                        $statement->bindParam(':email',$email);
                        $statement->bindParam(':username',$username);
                        $statement->bindParam(':pass',$password);
                        $statement->bindParam(':tipo_usuario',$usuario);
                    
                        $password=$hashContraseña;
                        $usuario='usuario';
                        $nombreCompleto=$nombre.' '.$apaterno.' '.$amaterno;
                        // var_dump($statement);
                        $statement->execute();

                        header('Location: index.php');
                        $error='USUARIO REGISTRADO CORRECTAMENTE';

                    }
                    else
                    {
                        $error= 'Ya existe un usuario registrado con este correo';
                    }
                }
                else
                {
                    $error='Ya existe un usuario registrado con ese nombre';
                }

            }
            else
                $error='El nombre de ususario debe tener por lo menos 5 caracteres';
            
        }
        else
            $error= 'La contraseña debe ser de por lo menos 8 caracteres';

        
    }
    else
    $error= 'Las contraseñas no coinciden!';

}
else
    $error='La direccion de e-mail no es correcta';
}




?>

<?include('encabezado.php');?>

        <script>
            hideAll();
        </script>
        <div class="container-fluid">

            <div class="row my-4 py-4">
                <div class="col-4 bg-light rounded py-3 ml-3 border">
                <form  method = "POST">
                        <div class="display-4 mb-3">Register</div>

                        <div class="form-group ">
                            <input type="text" class="form-control my-2" name="nombre" id="Username" placeholder="Nombre">
                            <input type="text" class="form-control my-2" name="apaterno" id="Username" placeholder="Primer Apellido">
                            <input type="text" class="form-control my-2" name="amaterno" id="Username" placeholder="Segundo Apellido">
                            <input type="email" class="form-control my-2" name="email" id="Email" aria-describedby="emailHelp" placeholder="Email">
                            <input type="password" class="form-control my-2" name="password" id="Password" placeholder="Contraseña">
                            <input type="password" class="form-control my-2" name="password2" id="PasswordRepeat" placeholder="Repetir Password">
                            <input type="text" class="form-control my-2" name="username" id="Username" placeholder="Nombre de usuario">
                        </div>

                        <label>Fecha de nacimiento</label>
                        <div class="form-inline ">
                            
                            <input type="date" class="form-control " name="nacimiento"/>
                        </div>
                        

                        <button type="submit" class="btn btn-primary btn-block my-2">Create account</button>
                </form>
                </div>
                <div class="col-4">
                <?php
                if($error!= '')
                {
                    echo'<div class="alert alert-danger" role="alert">';
                    echo $error;
                    echo'</div>';
                }
                ?>
                
                </div>  <!--Relleno-->


            </div>
           
           

        </div>


        <?include('pie.php');?>