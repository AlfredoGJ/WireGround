<?php
include('encabezado.php');



?>

        

        <script>
            hideAll();
        </script>

        <!-- Contenido -->
        <div class="container-fluid">
            <div class="row">
                <!-- Components bar -->
                <div class="col-2 bg-secondary">

                    <!-- Logic -->
                    <div class="common-tools bg-light border rounded my-2">
                    <h6>Logic</h6>
                    <table class=" border">
                        <tr>
                            <!-- And -->
                            <td class="tool">
                                <img src="Imagenes/and.png" class="img-fluid rounded" alt="And" >
                                <!-- <small class="text-muted">And</small> -->
                            </td>

                            <!-- Or -->
                            <td class="tool">
                                <img src="Imagenes/or.png" class="img-fluid rounded" alt="Or" >
                                <!-- <small class="text-muted">Or</small> -->
                            </td>

                            <!-- Not -->
                            <td class="tool">
                                <img src="Imagenes/not.png" class="img-fluid rounded" alt="Not">
                                <!-- <small class="text-muted">Not</small> -->
                            </td>

                            
                        </tr>
                        <tr class="">
                             <!-- Nand -->
                             <td class="tool" >
                                <img src="Imagenes/nand.png" class="img-fluid rounded" alt="Nand" >
                                <!-- <small class="text-muted">And</small> -->
                            </td>

                             <!-- Nor -->
                             <td class="tool">
                                <img src="Imagenes/nor.png" class="img-fluid rounded" alt="Nand" >
                                <!-- <small class="text-muted">Nor</small> -->
                            </td>

                            <!-- Xor -->
                            <td class="tool" >
                                <img src="Imagenes/xor.png" class="img-fluid rounded" alt="Nand" >
                                <!-- <small class="text-muted">Xor</small> -->
                            </td>

                        </tr>
                        <tr>
                            <!-- Xor -->
                            <td class="tool">
                                <img src="Imagenes/xnor.png" class="img-fluid rounded" alt="Nand">
                                <!-- <small class="text-muted">Xnor</small> -->
                            </td>
                        </tr>
                    </table>
                    
                </div>

                <!-- Electronic -->
                <div class="common-tools bg-light border rounded my-2">
                    <h6>Electronic</h6>
                    <table class="border">
                        <tr>
                            <td class="tool">
                                    <img src="Imagenes/resistor.png" class="img-fluid rounded" alt="Resistor">
                                    <!-- <small class="text-muted">Xnor</small> -->
                                </td>

                            <td class="tool">
                                    <img src="Imagenes/variable-resistor.png" class="img-fluid rounded" alt="Resistor">
                                    <!-- <small class="text-muted">Xnor</small> -->
                                </td>
                            <td class="tool">
                                    <img src="Imagenes/capacitor-condenser.png" class="img-fluid rounded" alt="Resistor">
                                    <!-- <small class="text-muted">Xnor</small> -->
                                </td>
                        </tr>

                        <tr>
                            <td class="tool">
                                    <img src="Imagenes/capacitor-polarized.png" class="img-fluid rounded" alt="Resistor">
                                    <!-- <small class="text-muted">Xnor</small> -->
                                </td>

                            <td class="tool">
                                    <img src="Imagenes/transistor.png" class="img-fluid rounded" alt="Resistor">
                                    <!-- <small class="text-muted">Xnor</small> -->
                                </td>
                            <td class="tool">
                                    <img src="Imagenes/diode.png" class="img-fluid rounded" alt="Resistor">
                                    <!-- <small class="text-muted">Xnor</small> -->
                                </td>
                        </tr>

                        <tr>
                                <td class="tool">
                                        <img src="Imagenes/ground.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
    
                                <td class="tool">
                                        <img src="Imagenes/piezoelectric-crystal.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
                                <td class="tool">
                                        <img src="Imagenes/battery.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
                            </tr>

                    </table>

                </div>


                 <!-- Ic -->
                 <div class="common-tools bg-light border rounded my-2">
                        <h6>Ic</h6>
                        <table class="border">
                            <tr>
                                <td class="tool">
                                        <img src="Imagenes/555.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
    
                                <td class="tool">
                                        <img src="Imagenes/4-bit-binary-counter.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
                                <td class="tool">
                                        <img src="Imagenes/chip-8.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
                            </tr>
    
                            <tr>
                                <td class="tool">
                                        <img src="Imagenes/basic-memory.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
    
                                <td class="tool">
                                        <img src="Imagenes/multiplexor.png" class="img-fluid rounded" alt="Resistor">
                                        <!-- <small class="text-muted">Xnor</small> -->
                                    </td>
                                
                        </table>
    
                    </div>


                </div>

               

                <!-- Canvass -->
                <div id="canvasContainer" class="col-10 bg-dark border">
                    <canvas name="editor" id="editor" >
                        
                    </canvas>
                </div>


            </div>
        </div>
        <!-- Contenido -->


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="editor.js" type="text/javascript"> </script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>