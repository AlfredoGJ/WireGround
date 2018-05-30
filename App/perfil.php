<?php
session_start();
include('conexion.php');

if(!isset($_SESSION['usuario']))
    {
        header('Location:index.php');
        return;
    }

    // var_dump($_SESSION['usuario']);
    $nombre=$_SESSION['usuario']->nombre;
    $username=$_SESSION['usuario']->username;
    $email=$_SESSION['usuario']->email;

    $sql='SELECT nombre, id, descripcion  FROM diagramas WHERE id_usuario =:id_usuario';
    $statement= $conexion->prepare($sql); 
    $statement->bindParam(':id_usuario',$id_usuario);
    $id_usuario=$_SESSION['usuario']->id;
    $statement->execute();
    // K$datos= $statement->fetchObject();

    // var_dump($datos);




    if($_SERVER['REQUEST_METHOD']=='POST')
    {

        var_dump($_POST);
        if(isset($_POST['Editar'])&& $_POST['Editar']!=null)
        {
            $sql='SELECT nombre, id, descripcion, datos  FROM diagramas WHERE id =:id';
            $statement= $conexion->prepare($sql); 
            $statement->bindParam(':id',$id);
            $id=$_POST['Editar'];
            $statement->execute(); 
            $datos=$statement->fetchObject();
            $_SESSION['diagrama'] = $datos;
            
            header('Location: editor.php');
            return;
        }

        if(isset($_POST['Eliminar'])&& $_POST['Eliminar']!=null)
        {
            $sql='DELETE FROM diagramas WHERE  diagramas.id =:id';
            $statement= $conexion->prepare($sql); 
            $statement->bindParam(':id',$id);
            $id=$_POST['Eliminar'];
            $statement->execute(); 
            // $datos=$statement->fetchObject();
            // $_SESSION['diagrama'] = $datos;
            
            header('Location: perfil.php');
            return;
        }



    }


    function displayDiagramas($stmnt)
    {
        $cont=0;

        $d=$stmnt->fetchObject();
        echo'<form action="#" method="POST">';
        echo '<table class="table">';
        echo    '<thead>';       
        echo    '</thead>';
        echo    '<tbody>';
          
        while($d!=false)
        {
            if($cont%2==0)
                echo ' <tr> 
                ';

            echo '<td>';
        
            echo '<div class="card">
            ';
            echo '<div class="card-body"> 
            ';
            echo '<h5 class="card-title">'.$d->nombre.'</h5>
             ';
            echo '<p class="card-text">'.$d->descripcion.'</p>
             ';
            echo '<button type= "submit" id="d_'.$d->id.'" name="Editar" value="'.$d->id. '" class="btn btn-primary"> Editar</button> 
            ';
            echo '<button  type= "submit" id="d_'.$d->id.'" name="Eliminar" value="'.$d->id. '" class="btn btn-danger">Eliminar </button> 
            ';
            
         
            echo '</div>
             ';
            echo '</div>
             ';

            echo '</td>';
            
            $cont=$cont+1;
             if($cont%2==0)
                echo '</tr> 
                ';

           
            $d=$stmnt->fetchObject();
        }
        echo '</tbody>';
        echo '</table>';
        echo'</form>';
    
        
    }

?>


        <?php include('encabezado.php');?>
       

        <script>
            onPerfil();
        </script>
        <div class="container py-4 my-4">
        
            <div class="row bg-light rounded p-4 border">
                
                <div class="row my-4">
                    <div class="col-4">
                        <img src="Imagenes/user.jpg" class="img-fluid m-3">
                        
                    </div>
            
                    <div class ="col-6 mx-3">
                        
                        <div class="display-4"> <?php echo $nombre; ?> </div>
                        <h4><b>User: </b><?php echo $username;?></h4>
                        <h4><b>E-mail: </b> <?php echo $email;?> </h4>
                        
                    </div>

                    
                    
                </div>
               
               

                <!-- Diagramas -->
                
                 <?php  displayDiagramas($statement); ?>
                <!-- Diagramas -->


                
                      
                </div>


        </div>


        <?php include('pie.php');?>