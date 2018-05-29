
        <? include('encabezado.php'); ?>

        <div class="container pb-4 mb-4">

                <form class="form-inline my-3 ">
                    <div class="form-group">
                        <label for=""></label>
                        <input type="search" name="searchinput" id="searchinput" class="form-control" placeholder="Search user" aria-describedby="helpId">
                        <button type="submit" class="btn btn-outline-primary mx-2">Search</button>

                    </div>
                </form>

                <!-- Contenedor usuarios -->

                <div class="card-deck mb-4 bg-light p-2">
                    <!-- Usuario -->
                    <div class="card col-3">
                        <img class="card-img-top" src="Imagenes/user.jpg" alt="">
                        <div class="card-body">
                            <h4 class="card-title">JuanHdz08</h4>
                            <p class="card-text">johnhdz@hotmail.com</p>
                        </div>
                        <div class="card-footer">
                            
                                <button type="button" class="btn btn-primary btn-block btn-sm">Delete</button>
                                <button type="button" class="btn btn-primary btn-block btn-sm">Block</button>
                        
                        </div>
                          
                    </div>
                    <!-- Usuario -->
                    <div class="card col-3">
                        <img class="card-img-top" src="Imagenes/user.jpg" alt="">
                        <div class="card-body">
                            <h4 class="card-title">LuzMa</h4>
                            <p class="card-text">luz_maria_gz@hotmail.com</p>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-block btn-sm">Delete</button>
                            <button type="button" class="btn btn-primary btn-block btn-sm">Block</button>
                        </div>
                          
                    </div>
                     <!-- Usuario -->
                     <div class="card col-3">
                            <img class="card-img-top" src="Imagenes/user.jpg" alt="">
                            <div class="card-body">
                                <h4 class="card-title">LuzMa</h4>
                                <p class="card-text">luz_maria_gz@hotmail.com</p>
                            </div>
                            <div class="card-footer">
                                <button type="button" class="btn btn-primary btn-block btn-sm">Delete</button>
                                <button type="button" class="btn btn-primary btn-block btn-sm">Block</button>
                            </div>
                              
                        </div>
                        
                     
                </div>
        </div>
        


       <? include('pie.php');?>