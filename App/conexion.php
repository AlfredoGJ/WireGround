<?php

$fuente="mysql:host=localhost;dbname=wiregrounddb";
$usuario="root";
$contraseña="root";


try
{
    $conexion= new PDO($fuente,$usuario,$contraseña);
    // echo'Conexion establecida...'; 
}
catch(PDOException $ex)
{
    echo "Ha ocurrido una excepcion ".$ex->getMessage();
}


?>