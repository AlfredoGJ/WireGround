<?php
session_start();
include('conexion.php');

if(!isset($_SESSION['usuario']))
    {
        header('Location:index.php');
        return;
    }
    
    $nombre=$_SESSION['usuario']->nombre;
    $username=$_SESSION['usuario']->username;
    $email=$_SESSION['usuario']->email;

    $sql='SELECT nombre, id, descripcion  FROM diagramas WHERE id_usuario =:id_usuario';
    $statement= $conexion->prepare($sql); 
    $statement->bindParam(':id_usuario',$id_usuario);
    $id_usuario=$_SESSION['usuario']->id;
    $statement->execute();
    

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

        if(isset($_POST['Nuevo']) && $_POST['Nuevo']=='yes')
        {
            $sql='INSERT INTO diagramas (nombre, descripcion, id_usuario) VALUES (:nombre, :descripcion, :id_usuario) ';
            $statement= $conexion->prepare($sql); 
            $statement->bindParam(':nombre',$nombre);
            $statement->bindParam(':descripcion',$descripcion);
            $statement->bindParam(':id_usuario',$id_usuario);
            $nombre=$_POST['Nombre'];
            $descripcion=$_POST['Descripcion'];
            $id_usuario=$_SESSION['usuario']->id;


            $datos=$statement->execute(); 
            $diagrama= new stdClass();
            $diagrama->nombre=$nombre;
            $diagrama->descripcion=$descripcion;
            $diagrama->id_usuario=$id_usuario;

            // $diagrama['nombre']=$nombre;
            // $diagrama['descripcion']=$descripcion;
            // $diagrama['id_usuario']=$id_usuario;

            $_SESSION['diagrama']=$diagrama;
            var_dump($diagrama);
            header('Location: editor.php');
            return;
        }





    }


    function displayDiagramas($stmnt)
    {
        $cont=0;

        $d=$stmnt->fetchObject();
        echo'<form action="#" method="POST" class="row my-3">';
        echo '<table class="table my-3">';
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
        <div class="container py-4 my-4 bg-light rounded  border">
        
                
                <div class="row my-4">
                    <div class="col-4">
                        <img src="Imagenes/user.jpg" class="img-fluid m-3">
                        
                    </div>
            
                    <div class ="col-6 mx-3">
                        
                        <div class="display-4"> <?php echo $nombre; ?> </div>
                        <h4><b>User: </b> <?php echo $username;?></h4>
                        <h4><b>E-mail: </b> <?php echo $email;?> </h4>
                        
                    </div>
                    
                    
                </div>
               
               
                <div class="row bg-secondary text-light">
                    <div class="col-lg-6">
                            <div class="display-4 m-4">Mis diagramas</div>
                    </div>

                    <div class="col-lg-6 text-center my-4">
                        <button name="" id="" class="btn btn-success col-10 py-3 my-2" href="#" role="button" data-target="#exampleModal" data-toggle="modal">
                                Crear Diagrama
                        </button>
                    </div>
                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title text-dark" id="exampleModalLabel">Nuevo diagrama</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <form method="POST" >
                                    <div class="form-group"  >
                                      <label for="recipient-name" class="col-form-label text-dark">Nombre:</label>
                                      <input type="text" class="form-control" id="recipient-name" name="Nombre">
                                      <input type="hidden" name="Nuevo" value="yes" >
                                    </div>
                                    <div class="form-group" >
                                      <label for="message-text" class="col-form-label text-dark">Descripcion:</label>
                                      <textarea class="form-control" id="message-text" name="Descripcion"></textarea>
                                    </div>
                                 
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                  <button type="submit" class="btn btn-primary"   >Crear diagrama</button>
                                </form>
                                </div>
                              </div>
                            </div>
                          </div>
                   

                </div>
                <!-- Diagramas -->
                
                 <?php  displayDiagramas($statement); ?>
                <!-- Diagramas -->


                
                      
             


        </div>


        <?php include('pie.php');?>