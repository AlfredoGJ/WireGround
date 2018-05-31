<?php
session_start();
include('conexion.php');
// echo $_POST;

$sql='UPDATE diagramas SET nombre = :nombre, descripcion = :descripcion, id_usuario = :id_usuario, datos = :datos WHERE id = :id ';
$statement= $conexion->prepare($sql);

$statement->bindParam(':nombre',$nombre);
$statement->bindParam(':descripcion',$descripcion);
$statement->bindParam(':id_usuario',$id_usuario);
$statement->bindParam(':datos',$datos);
$statement->bindParam(':id',$id);

// echo $sql;

$nombre=$_SESSION['diagrama']->nombre;
$descripcion=$_SESSION['diagrama']->descripcion;
$id_usuario=$_SESSION['usuario']->id;
$datos=$_POST['data'];
$id=$_SESSION['diagrama']->id;


$result=$statement->execute();
// echo $result;
// echo $nombre;
// echo $descripcion;
// echo $id_usuario;
// echo $datos;
// echo $id;

if(result!=false)
    echo 'Diagrama guardado';
else
    echo 'Error al guardar diagrama';



// echo $_POST['data'];

?>