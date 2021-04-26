import React from "react";

function Mascotas () {


    return(
    <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Veterinaria</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/index.html">Mascotas<span
                                        className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/veterinarios.html">Veterinari@s</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/consultas.html">Consultas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/duenos.html">Dueños</a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
        
                <div class="actions-menu">
                    <h1>Mascotas</h1>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Nuevo
                </button>
                <div class="alert alert-danger alert-dismissible" role="alert">
                    <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                </div>
        
                <table class="table table-stripped table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dueño</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="lista-mascotas">
                        
                    </tbody>
                </table>
            </div>
        
        
        
        
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false" data-backdrop="static">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Nueva veterinaria</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btn-x">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="form">
                            <input type="hidden" id="indice" />
                            <div class="form-row">
                                <div class="col">
                                    <select id="tipo" class="form-control">
                                        <option>Tipo</option>
                                        <option>Perro</option>
                                        <option>Gato</option>
                                        <option>Pajaro</option>
                                        <option>Pez</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                            </div>
        
                            <br>
                            <div class="form-row">
                                <div class="col">
                                <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre">
                                </div>
                            <div class="col">
                                <select class="form-control" id="dueno">
                                    <option>Propietario</option>
                                    <option>Nora</option>
                                    <option>Melisa</option>
                                    <option>Karen</option>
                                    <option>Lizbeth</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            </div>
        
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btn-cerrar1">Cerrar</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" id="btn-guardar">Crear</button>
                    </div>
                    </div>
                </div>
            </div>
        
        
        
        
        
            <!-- MODAL PARA ELIMINAR-->
            <div class="modal fade" data-backdrop="static" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Mensaje de confirmación</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btn-x2">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>¿Desea eliminar esa mascota?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="btn-cerrar2">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="btn-eliminar2">Eliminar</button>
                </div>
                </div>
                </div>
    </div>
    );
}

