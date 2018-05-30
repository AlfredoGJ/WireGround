<?php
session_start();
include('conexion.php');
var_dump[$_POST];

$sql='INSERT INTO diagramas (nombre, descripcion, id_usuario, datos) VALUES (:nombre, :descripcion, :id_usuario, :datos)';
$statement= $conexion->prepare($sql);

$statement->bindParam(':nombre',$nombre);
$statement->bindParam(':descripcion',$descripcion);
$statement->bindParam(':id_usuario',$id_usuario);
$statement->bindParam(':datos',$datos);


$nombre=$_POST['nombreDiagrama'];
$descripcion='Prueba insercion en base de datos de diagrama';

$id_usuario=$_SESSION['usuario']->id;
$datos=$_POST['data'];

echo $nombre;
echo $descripcion;
echo $id_usuario;

$result=$statement->execute();
if(result!=false)
    echo 'Diagrama guardado';
else
    echo 'error al guardar diagrama';



// echo $_POST['data'];

?>